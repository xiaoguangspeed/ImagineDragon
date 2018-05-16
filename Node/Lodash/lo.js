var  _= require('lodash');
var br = require('./node_modules/lodash/_baseRandom')
// _开头的方法是内部方法
var version = _.VERSION
console.log('version is: ',version)
var string = 'lodash';
console.log(_.isArrayLike(string));
console.log(Object('boxing'))
// for ...of ... 可以用来遍历字符串 map set
for(var key of string){
    
}
console.log(string)
console.log(String.fromCharCode(string.charCodeAt(0)));
// 
var ran = br(2,5);
console.log(ran);
var testArray = [1,2,3,4,5,6,7,8,9,0];
var temp = _.chunk(testArray,-1);
console.log(temp);
var testArray = Array(4);
// var FUNCTION_ERROR = "Expected an function!"
// if(true){
//     throw new TypeError(FUNCTION_ERROR)
// }
console.log("max_safe_integer: ",Number.MAX_SAFE_INTEGER)

console.log(Object.prototype.toString.call(45))  //"[object Number]"

var reUnescapedHtml = /[&<>"']/g;
console.log("regular exp source: ",reUnescapedHtml.source)
  /** Used to detect unsigned integer values.  0 和正整数*/ 
  var reIsUint = /^(?:0|[1-9]\d*)$/;
testArray.push.apply(testArray,[1,2,3,4]);
  console.log(testArray)  