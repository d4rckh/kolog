var chalk = require('chalk')

var date = require('../util/date')

module.exports = (data, logger) => {

  if (!data.prefix) data.prefix = ' '

  var log = chalk.grey('' + data.scope + ': ') + chalk[data.color](data.emoji + (data.prefix) + data.text)
  
  logger.stream.write(log)
}
