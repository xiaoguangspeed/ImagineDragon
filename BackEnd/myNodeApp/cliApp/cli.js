const path = require('path');

Object.defineProperty(exports,'__esmodule',{value:true});
console.dir(exports)

var filepath = path.join(process.cwd(),'output.json');
let dirName = path.dirname(filepath);  //不包括最后的文件路径
console.log(filepath,dirName);