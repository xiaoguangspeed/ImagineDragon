var Writable = require('stream').Writable
var util = require('util')

module.exports = CountStream
// 自定义的可写流必须调用 new stream.Writable([options]) 构造函数并实现 writable._write() 方法， writable._writev() 方法是可选的。
util.inherits(CountStream,Writable)
function CountStream(matchText, options){
  Writable.call(this, options)
  this.count = 0
  this.matcher = new RegExp(matchText, 'ig')
}

CountStream.prototype._write = function(chunk, encoding, cb){
  
}
