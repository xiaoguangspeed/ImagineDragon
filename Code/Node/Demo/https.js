const https = require('https')
const fs = require('fs')

const options = {
  key: fs.readFileSync('./ryder-private-key.pem'),
  cert: fs.readFileSync('./ryder-pub-cert.pem')
}
https.createServer(options,(req, res) => {
  res.writeHead(200)
  res.end('hello world\n')
}).listen(8000)