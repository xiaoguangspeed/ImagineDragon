// cat demo1.js | node list2.10.js
// process.stdin.resume()
process.stdin.setEncoding('utf8')
process.stdin.on('data',(text) => {
  process.stdout.write(text.toUpperCase())
})

// node listings/globals/console-1.js 2> errors-file.log  重定向到文件