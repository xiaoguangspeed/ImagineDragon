// Adapter pattern lets you wrap an otherwise incompatible object in an adapter to make it compatible with another class.
const ary = (fn, n) => (args) => fn(...args.slice(0, n))
// 多个箭头函数其实很简单，就是可以接收多个参数，执行的时候依次传入参数
const call = (key, ...args) => context => context[key](...args)
const map = call.bind(null, 'map')
Promise.resolve([1,2,3])
  // .then(call('map', x => x*2))
  .then(map(x => x*3))
  .then(console.log)

// const collectInto = fn => (...args) => fn(args)
//   const Pall = collectInto(Promise.all.bind(Promise));  // Promise.all called on non-object如果不见bind的话
//   let p1 = Promise.resolve(1);
//   let p2 = Promise.resolve(2);
//   let p3 = new Promise(resolve => setTimeout(resolve, 2000, 3));
//   Pall(p1, p2, p3).then(console.log); // [1, 2, 3] (after about 2 seconds)

  const over = (...fns) => (...args) => fns.map(fn => fn.apply(null,args))
  const minMax = over( Math.min, Math.max)
  console.log(minMax(1,2,3,4,5))
// reduce啊，so 
  const pipeAsyncFunc = (...fns) => arg => fns.reduce((p,c) => p.then(f),Promise.resolve(arg) )

// 功能型函数管道
const pipeFunctions = (...fns) => input => fns.reduce((acc,fn) => fn(acc), input)