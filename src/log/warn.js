var chalk = require('chalk')

var date = require('../date')

module.exports = (text, logger) => {
  if (!text) throw 'You need to specify text to log (warn)'

  var log = chalk.grey('' + (logger.scope) + ': ') + chalk.yellow(logger.figures.warning + '  WARNING: ' + text)
  console.log(log)

  return {text, type: 'warn', date: date()}
}
