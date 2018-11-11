var Kolog = require('../src/index.js')

var logger = new Kolog.Logger({
    scope: 'my scope',
    types: [
        {
            emoji: '**',
            color: 'red',
            name: 'fatalError',
            prefix: ' FATAL ERROR: '
        },
        {
            emoji: '!!',
            color: 'green',
            name: 'newsuck',
            prefix: ' NEW SUCK! ',
            scope: 'sucks',
            template: 'new suck by {text}'
        }
    ]
})

logger.log('genericLog')
logger.warn('Warning')
logger.error('error')
logger.success('success')
logger.info('info')
logger.fatalError('Fatal error')
logger.newsuck('andrew')