const EventEmitter = require('events');
class MyEmit extends EventEmitter{};

const myEmit = new MyEmit();
myEmit.on('event',(arg1) =>{
  console.log('event emited',arg1,this);
})
myEmit.emit('event',666);