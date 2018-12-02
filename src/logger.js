//var customLog = require('./log/customLog.js')
var base = require('./base')
var log = require('./log/log')

/**
 * Extends logger
 * @class customLogger
 * @param {object} [opts={}] Options, default is {} 
 * @param {object[]} [types=[]] Custom logs, default is []
 * @param {string} opts.types[].emoji The emoji, you can use Kolog.figures
 * @param {string} opts.types[].color Color to log, lowercasses, use chalk's format!
 * @param {string} opts.types[].name the most important prop, how to call it, <customLogger>.namehere(...)
 * @param {string} opts.types[].prefix whats the prefix of the text
 * @param {string} [opts.types[].scope=customLogger.scope] the scope, the default scope is <logger>.scope 
 */
function Logger(opts={}) {

    var l = new base(opts)

    if (opts.types) {
        opts.types.forEach(type => {
                if (Object.keys(l).includes(type.name)) return 0;
                if (!type.scope) type.scope = l.scope
                
                //type.name = opts.name
                l[type.name] = (text) => {
                    if (type.template) text = type.template.replace('{text}', text)
                    log({
                            text: text,
                            color: type.color,
                            scope: type.scope,
                            emoji: type.emoji
                        })
                    }
                })
        }

        return l
    }

    module.exports = Logger