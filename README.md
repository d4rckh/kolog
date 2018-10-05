# Kolog
Advanced logging util for nodejs

**Installing:**

NPM:
```batch
npm i kolog
```
Yarn:
```batch
yarn add kolog
```


Example:
```js
var Kolog = require('../src/index.js')

var logger = new Kolog.Logger({scope: 'normal logs'})

console.log('--LOGGER--')

logger.log('genericLog')
logger.warn('Warning')
logger.error('error')
logger.success('success')
logger.info('info')

```

Docs: [node-kolog.github.io](node-kolog.github.io)