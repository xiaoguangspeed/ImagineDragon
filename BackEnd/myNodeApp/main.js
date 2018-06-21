var fn = function(){
  console.log('this is fn')
}
var pm = new Promise((resolve,reject) => {
  //执行一些异步操作
  
});
Promise.resolve(fn());
Promise.resolve(5).then(function(res){
  console.log(res)
})