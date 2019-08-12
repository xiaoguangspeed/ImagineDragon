var assert = require('assert')
var fs = require('fs')
var CountStream = require('./list1.1.js')
var countStream = new CountStream('example')
var passed = 0

countStream.on('total', (val) => {
  assert.equal(val, 1)
  passed++
})
fs.createReadStream(__filename).pipe(countStream)

process.on('exit', () => {
  console.log('assertions passed %d', passed)
})