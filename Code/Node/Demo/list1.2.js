var CountStream = require('./list1.1.js')
var countStream = new CountStream('book')
var http = require('http')

http.get('http://www.manning.com', (res) => {
  res.pipe(countStream)
})

countStream.on('total', (val) => {
  console.log('total count is %d', val)
})