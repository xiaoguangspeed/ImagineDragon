const Writable = require('stream').Writable
// process.stdin.pipe(process.stdout)
let outStream = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString())
    callback()
  }
})

process.stdin.pipe(outStream)