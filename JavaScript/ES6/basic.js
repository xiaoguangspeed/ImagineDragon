var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;  //中文字符
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
console.log(isTwoCNChar("丁日"))  //true