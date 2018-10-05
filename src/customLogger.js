var customLog = require('./log/customLog.js')
var logger = require('./logger')

/**
 * Extends logger
 * @class
 * @param {object} [opts={}] Options, default is {} 
 * @param {object[]} [types=[]] Custom logs, default is []
 * @param {string} opts.types[].emoji The emoji, you can use Kolog.figures
 * @param {string} opts.types[].color Color to log, lowercasses, use chalk's format!
 * @param {string} opts.types[].name the most important prop, how to call it, <customLogger>.namehere(...)
 * @param {string} opts.types[].prefix whats the prefix of the text
 * @param {string} [opts.types[].scope=customLogger.scope] the scope, the default scope is <logger>.scope 
 */
function customLogger(opts) {

    var l = new logger(opts)

    if (opts.types) {
        opts.types.forEach(type => {
            if (Object.keys(l).includes(type.name)) return 0;
            if (!type.scope) type.scope = l.scope
            //type.name = opts.name
            l[type.name] = (text) => {
                type.textToLog = text
                customLog(type, l)
                l.emit('customLog', type)
            }
        })
    }

    return l
}

module.exports = customLogger
