var chalk = require('chalk')

var date = require('../date')

module.exports = (type, logger) => {
  if (!type.textToLog) throw 'You need to specify text to log (genericLog)'

  var log = chalk.grey('' + type.scope + ': ') + chalk[type.color](type.emoji + type.prefix + type.textToLog)
  console.log(log)

  return {type: 'customLog', date: date(), ob: type}
}
