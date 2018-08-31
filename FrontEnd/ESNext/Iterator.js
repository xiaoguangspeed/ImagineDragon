// 可迭代协议
// 可迭代协议允许 JavaScript 对象去定义或定制它们的迭代行为, 例如（定义）在一个 for..of 结构中什么值可以被循环（得到）。
// 一些内置类型都是内置的可迭代对象并且有默认的迭代行为, 比如 Array or Map, 另一些类型则不是 (比如Object) 。
// 为了变成可迭代对象， 一个对象必须实现 @@iterator 方法, 意思是这个对象（或者它原型链 prototype chain 上的某个对象）必须有一个名字是 Symbol.iterator 的属性:

var myIterable = {}
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...myIterable] // [1, 2, 3]

// for...of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句



// 迭代生成器