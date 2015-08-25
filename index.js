module.exports = function(str){
  return require('debug')(require(process.env.PWD +'/package.json').name + ':' + str);
}
