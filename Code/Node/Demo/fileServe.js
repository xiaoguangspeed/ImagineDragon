const serve = require('http').createServer()
const fs = require('fs')

serve.on('request',(req, res) => {
  // fs.readFile('./big.file',(err,data) => {
  //   if(err) throw err
  //   res.end(data)
  // })
  const src = fs.createReadStream('./big.file')
  src.pipe(res)
})
serve.listen('3000')