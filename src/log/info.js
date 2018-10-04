var chalk = require('chalk')

var date = require('../date')

module.exports = (text, logger) => {
  if (!text) throw 'You need to specify text to log (info)'

  var log = chalk.grey('' + (logger.scope) + ': ') + chalk.blue(logger.figures.info + '  INFO: ' + text)
  console.log(log)

  return {text, type: 'info', date: date()}
}
