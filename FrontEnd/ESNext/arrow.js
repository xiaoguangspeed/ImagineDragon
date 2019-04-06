// function Person(){
//     this.age = 0;
  
//     setInterval(() =>{
//       this.age++; // |this| 正确地指向person 对象
//       console.log(this.age)
//     }, 1000);
//   }
  
//   var p = new Person();

let unary = fn => val => fn(val)
let parse = unary(parseInt)
console.log(['1.1', '2', '0.6'].map(parse))
// 
'use strict';
var obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log( this.i, this)
  }
}
obj.b(); 
// undefined
obj.c(); 
// 10, Object {...}