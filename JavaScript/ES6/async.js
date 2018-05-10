// async 函数中可能会有 await 表达式，这会使 async 函数暂停执行，
// 等待表达式中的 Promise 解析完成后继续执行 async 函数并返回解决结果。
async function asyncCall() {
  console.log('calling');
  
}

