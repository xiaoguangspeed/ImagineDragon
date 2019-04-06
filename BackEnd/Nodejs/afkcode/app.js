const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
app.use(cookieParser())

app.get('/',(req, res) => {
    // console.log(req)
    res.setHeader('Set-Cookie',['name=ninja'])
    res.send('hello express')
})
app.listen(3000, () => {
    console.log("app running on port 3000:")
})
