// tail call optimization tco 尾递归优化
'use strict'
function factorial(num, total = 1){
  if(num === 1) return total
  else return factorial(num -1, num* total)
}

console.log(factorial(500))