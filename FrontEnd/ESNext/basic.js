// slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。

// 给新的变量命名并提供默认值
// 一个属性可以是1）从一个对象解构，并分配给一个不同名称的变量，2）分配一个默认值，以防未解构的值是undefined。
var {a:aa = 10, b:bb = 5} = {a: 3};

console.log(aa); // 3
console.log(bb); // 5

console.log( exports == this)

// Array.from(arrayLike[, mapFn[, thisArg]])
// 伪数组对象（拥有一个 length 属性和若干索引属性的任意对象）
// 可迭代对象（可以获取对象中的元素,如 Map和 Set 等）
// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]

function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);
  
    this.subject = subject;
  }