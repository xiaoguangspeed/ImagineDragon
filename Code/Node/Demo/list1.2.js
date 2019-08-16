var CountStream = require('./list1.1.js')
var countStream = new CountStream('book')
console.log(require.resolve('./list1.1.js'))
console.log(require.main)  //表示当 Node.js 进程启动时加载的入口脚本。
var http = require('http')

http.get('http://www.manning.com', (res) => {
  res.pipe(countStream)
})

countStream.on('total', (val) => {
  console.log('total count is %d', val)
})