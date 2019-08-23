var fs = require('fs')
fs.readFile('googlelogo.png', (err, buf) => {
  console.log(Buffer.isBuffer(buf))
  var base64 = `data:image/png;base64,${buf.toString('base64')}`
  // data URI using 
  console.log(base64)
})
fs.readFile('genius.txt', (err, buf) => {
  console.log(buf.toString('ascii'))
})