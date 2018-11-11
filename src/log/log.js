var chalk = require('chalk')

var date = require('../date')

module.exports = (data) => {

  if (!data.prefix) data.prefix = ' '

  var log = chalk.grey('' + data.scope + ': ') + chalk[data.color](data.emoji + (data.prefix) + data.text)
  console.log(log)
}
