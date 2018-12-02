var Kolog = require('../src/index.js')

var logger = new Kolog.Logger()

logger.log('Using kolog v' + Kolog.version)
logger.warn('Warning')
logger.error('error')
logger.success('success')
logger.info('info')