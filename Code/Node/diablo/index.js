const http = require('http');

const server = http.createServer();
server.listen(3000,()=>{
    process.title='diablo_process';
    console.log('进程id',process.pid)
})