// 当调用一个 async 函数时，会返回一个 Promise 对象。当这个 async 函数返回一个值时，
// Promise 的 resolve 方法会负责传递这个值；当 async 函数抛出异常时，Promise 的 reject 方法也会传递这个异常值。
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function add1(x) { 
  var a = await resolveAfter2Seconds(20); 
  var b = await resolveAfter2Seconds(30); 
  return x + a + b; 
}
 
add1(10).then(v => { 
  console.log(v); // prints 60 after 4 seconds. 
});

async function add2(x) {
  var a = resolveAfter2Seconds(20);
  var b = resolveAfter2Seconds(30);
  return x + await a + await b;
}

add2(10).then(v => {
  console.log(v);  // prints 60 after 2 seconds.
});

// 异步函数表达式与 异步函数语句 非常相似，语法也基本相同。它们之间的主要区别在于异步函数表达式可以省略函数名称来创建一个匿名函数。
// async function expression assigned to a variable
var add1 = async function(x) {
  var a = await resolveAfter2Seconds(20);
  var b = await resolveAfter2Seconds(30);
  return x + a + b;
}