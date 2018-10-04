var chalk = require('chalk')

var date = require('../date')

module.exports = (text, logger) => {
  if (!text) throw 'You need to specify text to log (genericLog)'

  var log = chalk.grey('' + logger.scope + ': ') + chalk.white(text)
  console.log(log)

  return {text, type: 'genericLog', date: date()}
}
