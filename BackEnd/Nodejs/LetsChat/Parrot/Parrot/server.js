'use strict';
var Koa = require('koa');
var server = require('koa-static');
// Koa Ӧ�ó�����һ������һ���м�������Ķ������ǰ������ƶ�ջ�ķ�ʽ��֯��ִ�еġ�
var Router = require('koa-router');

var port = process.env.PORT || 1337;
var app = new Koa();
var router = new Router();

app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Responce-Time');
    console.log(`${ctx.method}-${ctx.url}-${rt}`)
})
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const end = Date.now() - start;
    ctx.set('X-Responce-Time', `${end}ms`)
})
app.use(server('.'));
app.use(router.routes()).use(router.allowedMethods());
app.listen(port);  
