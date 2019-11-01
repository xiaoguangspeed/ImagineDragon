let address = Symbol('beijing')
let obj = {
  name: 'jake',
  age: 30,
  gender: 'man',
  job: 'engineer',
  get salary() {
    return '18k'
  },
  address :'beijing'
}
// 给定对象的自身可枚举属性组成的数组，顺序同 for...in 
console.log(Object.keys(obj))
console.log(Object.getOwnPropertySymbols(obj))
Object.keys(obj).reduce(function(prev,curr,currindex,arr){
  console.log(prev,curr,currindex,arr)
},{})