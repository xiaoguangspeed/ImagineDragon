process.stdin.resume()
process.on('SIGHUP',() => {
  console.log('program terminated')
})
console.log(process.pid)
// OS process send SIGHUP to node process