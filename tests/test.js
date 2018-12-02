var Kolog = require('../src/index.js')

var logger = new Kolog.Logger()

logger.log('generic log')
logger.warn('Warning')
logger.error('error')
logger.success('success')
logger.info('info')