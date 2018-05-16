var chunk = require('./chunk.js');
console.dir(chunk);
var test = (...args) => {
  console.log(JSON.stringify(args));
};

test(1, 2, 3);
//
var ryder = {};
Object.defineProperty(ryder, "a", {
  value: "zhengxiaoguang",
  writable: true,
  configurable: true,
  enumerable: true
});
console.log(ryder);

// set
var mySet = new Set([1,3,'hello'])
console.log(mySet.entries())

// map
var myMap = new Map([['a',3],['b',4]])
console.log(myMap)

console.log('\u4e01')