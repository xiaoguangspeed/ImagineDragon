var myWorker = new Worker('worker.js');
setInterval(function(){
  myWorker.postMessage('hello from main.js');
},1000)
myWorker.onmessage = function(e){
  console.log(e.data);
  myWorker.terminate();
}

// subworker

// shared worker 
