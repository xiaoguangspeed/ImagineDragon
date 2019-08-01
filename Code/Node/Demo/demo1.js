const fs = require('fs')
const { Writable, Readable } = require('stream')
const { createHash } = require('crypto')
const path = require('path')

class myWritable extends Writable {
  constructor(options){
    super(options)
  }
}

// rs = fs.createReadStream(__dirname)
// rs.on(data,)
let sha1 = createHash('sha1')
console.log(sha1.digest('hex'))

console.log(path.posix.resolve(__dirname))