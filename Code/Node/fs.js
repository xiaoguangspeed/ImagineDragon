let fs = require('fs')
let stat = fs.stat('../LearnTs.js',(err, stats) => {
  console.log(err, stats)
})
console.log(stat) // 回调 undefined


