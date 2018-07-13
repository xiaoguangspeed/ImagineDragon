var fn = function(){
  console.log('this is in fn')
}
var pm = new Promise((resolve,reject) => {
  //执行一些异步操作
  
});
Promise.resolve(fn());
Promise.resolve(5).then(function(res){
  console.log(res)
});

console.log("fn.name",fn.name)
// process.exit(1); //后边的代码不执行
// throw new Error("everything is is order") //可以用Error替代return，但是Error就中止程序了

const state = {
  login:1
}

function reducer(state){
  return {
    ...state,address:'0x012312398349832'
  }
}

console.log(reducer(state));