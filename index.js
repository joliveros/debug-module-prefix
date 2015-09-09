module.exports = function(str){
  var prefix;
  if(process.env.PWD){
    prefix = require(process.env.PWD +'/package.json').name;
  }
  else{
    prefix = window.DEBUG
  }

  return require('debug')( prefix + ':' + str);
}
