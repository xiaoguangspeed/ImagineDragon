let obj1 = {a:1};
Object.assign(obj1,{b:2,c:3});
console.log(obj1);
console.log({...obj1,d:4})
// Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
let obj2 = {b:{b1:{b2:obj1}}}
let obj3 = Object.assign({},obj2);
console.log(obj3);