const fetch = require('node-fetch')
fetch("https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers").then( r => {
    console.log('got responce',{
        status:r.status,
        size :r
    })
})