var prefix = 'test'
, debug = require('./index')(prefix)
, expect = require('chai').expect
, moduleName = require('./package.json').name

var write = console.log
var log = '';

console.log = function(str) {
  log +=str;
  write.apply(console, arguments)
}

debug.log = console.log.bind(console)

describe('debug w/ module name prefix', function(){
  it('should print module name', function(){
    debug('test');
    expect(log.indexOf(moduleName)>-1).to.be.true;
  })
})
