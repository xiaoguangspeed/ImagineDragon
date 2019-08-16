function monitor(){
  console.log(process.memoryUsage())
}

var id = setInterval(monitor, 1000);
id.unref()
// 如果没有其他活动保持事件循环运行，则进程可以在调用 Timeout 对象的回调之前退出。
setInterval(() => {
  console.log('doner')
},5000)
// Once the timeout’s delay has been reached, the program will exit without calling clearTimeout.