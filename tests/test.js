var Kolog = require('../src/index.js')

var logger = new Kolog.Logger({scope: 'normal logs'})

console.log('--LOGGER--')

logger.log('genericLog')
logger.warn('Warning')
logger.error('error')
logger.success('success')
logger.info('info')


var custom = new Kolog.customLogger({
    scope: 'custom logs',
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
            name: 'suck',
            prefix: ' NEW SUCK! ',
            scope: 'sucks'
        }
    ]
})

console.log('--CUSTOM LOGGER--')

custom.fatalError('Fatal error')
custom.suck('new suck by andrew')