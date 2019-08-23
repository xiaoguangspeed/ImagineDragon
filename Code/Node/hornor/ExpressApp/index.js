var express = require('express')
var app = express()

app.on('hello', () => {
  console.log('hello express')
})

app.get('/', (req, res) => {
  console.dir(res.app.emit('hello'))
  res.send('hello guang')
})

app.listen(3000)