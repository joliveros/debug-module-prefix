# debug-module-prefix
[![Build Status](https://travis-ci.org/joliveros/debug-module-prefix.svg?branch=master)](https://travis-ci.org/joliveros/debug-module-prefix)

```js
var debug = require('debug-module-prefix')('test');

debug('log date: ' + new Date());
// will print
// module_name:test:log date: Sun Aug 23 2015 01:19:36 GMT-0500 (CDT)
```
