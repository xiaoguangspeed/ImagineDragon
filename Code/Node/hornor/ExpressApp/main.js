
const mongoose = require('mongoose')
const checkVersion = require('./utils/checkVersion')

const config = require('./config/server')
const app = require('./app')
checkVersion()
// 作为内存数据库使用
global.mdb = new Map()
global.mdb.set('sealList', new Set()) // 封禁用户列表
global.mdb.set('newUserList', new Set()) // 新注册用户列表

mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true } ,(err) => {
  if (err) {
    console.error(err)
    return process.exit(1)
  }
  console.log('connect database success!')
  app.listen(config.port,() => {
    console.log(`app lisening on port ${config.port}`)
  })
})
