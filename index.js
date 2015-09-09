module.exports = function(str){
  var prefix;
  if(process){
    prefix = require(process.env.PWD +'/package.json').name;
  }
  else{
    prefix = window.DEBUG
  }

  return require('debug')( prefix + ':' + str);
}
