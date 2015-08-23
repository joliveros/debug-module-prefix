module.exports = function(str){
  return require('debug')(require('./package.json').name + ':' + str);
}
