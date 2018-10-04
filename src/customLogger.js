var customLog = require('./log/customLog.js')
var logger = require('./logger')

/**
 * Extends logger
 * @class
 * @param {object} [opts={}] Options, default is {} 
 * @param {object[]} [types=[]] Custom logs, default is []
 * @param {string} types[].emoji The emoji, you can use Kolog.figures
 * @param {string} types[].color Color to log, lowercasses, use chalk's format!
 * @param {string} types[].name the most important prop, how to call it, <customLogger>.namehere(...)
 * @param {string} types[].prefix whats the prefix of the text
 * @param {string} [types[].scope=customLogger.scope] the scope, the default scope is <logger>.scope 
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
