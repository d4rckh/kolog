var chalk = require('chalk')
var date = require('../date.js')

module.exports = (text, logger) => {
  if (!text) throw 'You need to specify text to log (error)'

  var log = chalk.grey('' + (logger.scope) + ': ') + chalk.red(logger.figures.cross + '  ERROR:   ' + text)
  console.log(log)

  return {text, type: 'error', date: date()}
}
