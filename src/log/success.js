var chalk = require('chalk')

var date = require('../date')

module.exports = (text, logger) => {
  if (!text) throw 'You need to specify text to log (success)'

  var log = chalk.grey('' + (logger.scope) + ': ') + chalk.green(logger.figures.tick + '  SUCCESS: ' + text)
  console.log(log)

  return {text, type: 'success', date: date()}
}
