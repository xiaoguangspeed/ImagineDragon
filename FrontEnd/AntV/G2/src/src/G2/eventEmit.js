/**
 * 
 * @param { String } name 
 */
var alias = function(name){
  return function(){
    this[name].apply(this,arguments);
  }
}

global.fn = function(){
  console.log('fn');
}

var fm = alias('fn');
fm();