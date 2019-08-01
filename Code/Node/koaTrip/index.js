const koa = require('koa')
const fs = require('fs')
const { createHash } = require('crypto')
const app = new koa()

app.use((ctx, next )=> {
  const sha1 = createHash('sha1')
  ctx.body = sha1
})
// koa compose组合中间件
// 响应中间件
app.listen(3000)