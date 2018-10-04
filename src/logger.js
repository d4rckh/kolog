var error = require('./log/error.js')
var warn = require('./log/warn.js')
var success = require('./log/success.js')
var info = require('./log/info.js')
var genericLog = require('./log/genericLog.js')
var figures = require('figures')
var emitter = require('./events')

/**
 * @class Logger
 * @param {object} [opts={}] Options of the logger
 * @param {string} [opts.scope=Kolog] The scope (group) to log, default is Kolog
 * @param {boolean} [opts.catchErrors=false] Catch uncaughtException errors and log them using the error function
 */
class Logger {
  constructor(opts = {}) {
    if (opts.catchErrors) {
      process.on('uncaughtException', function (exception) {
        error(exception)
      });
    }

    /**
     * Array of logs from the logger
     * @type {Object[]}
     */
    this.logs = []

    /**
     * The scope / category name that the logger have, it is the default for a log.
     * @type {String}
     */
    this.scope = opts.scope || 'Kolog'

    /**
     * The figures
     * @see {@link https://www.npmjs.com/package/figures|npm page}
     */
    this.figures = figures

    /**
     * @type {object}
     * @private
     */
    this.eventEmitter = new emitter()
  }

  /**
   * Generic log text
   * @param {string} text What text to log?
   */
  log(text) {
    this.logs.push(genericLog(text, this))
  }

  /**
   * Warn something
   * @param {string} text What text to log (warn)?
   */
  warn(text) {
    this.logs.push(warn(text, this))
  }

  /**
   * emit a function
   * @param {string} event Event you want to call
   * @param  {...any} args args to send
   */
  emit(event, ...args) {
    this.eventEmitter.emit(event, ...args)
  }

  /**
   * Listen to an event
   * @param {string} event event name
   * @param {function} cb What you want to triger
   */
  on(event, cb) {
    this.eventEmitter.on(event, cb)
  }

  /**
   * Error something
   * @param {string} text Text to log (error)
   */
  error(text) {
    this.eventEmitter.emit('log', text)
    this.logs.push(error(text, this))
  }

  /**
   * Success log
   * @param {string} text Text to log (SUCCESS)
   */
  success(text) {
    this.eventEmitter.emit('log', text)
    this.logs.push(success(text, this))
  }

  /**
   * Info log
   * @param {string} text Text to log (info)
   */
  info(text) {
    this.eventEmitter.emit('log', text)
    this.logs.push(info(text, this))
  }
}

module.exports = Logger
