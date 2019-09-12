const express = require('express')
const path = require('path')

const app = express()
// app.use(express.json())
app.use(express.static(path.join(__dirname, 'assets'), {

}))
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin',"http://localhost:3000")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
})
app.on('hello', () => {
  console.log('hello express')
})

app.get('/', (req, res) => {
  res.app.emit('hello')
})
app.get('/api/hello', (req, res) => {
  res.send('hello')
})

module.exports = app