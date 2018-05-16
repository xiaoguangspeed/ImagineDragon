var hi = name => `hi ${name}`;
var greeting = hi('john');
console.log(greeting);

// json => callback(json)

var arr = [1,2,3,4,5,6];
console.log('pure func',arr.slice(0,3))
console.log('inpure fun',arr.splice(0,3))  //返回值是删除的元素

var checkAge = (age) => {
    var minimum = 24;   //minimum是函数内部的变量
    return age >= minimum;
}

// curring
// add 返回的是一个函数 b => a+b;
var add = a => b => a+b;

