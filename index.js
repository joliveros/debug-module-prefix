module.exports = function(str){
  var prefix;
  if(process.env.PWD){
    prefix = require(prefix +'/package.json').name;
  }
  else{
    prefix = window.DEBUG
  }

  return require('debug')( prefix + ':' + str);
}
