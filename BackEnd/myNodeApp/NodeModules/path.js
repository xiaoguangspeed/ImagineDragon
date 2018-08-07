const path = require('path');
const resolve = p => path.resolve(__dirname, '../', p);
console.log(resolve('main.js'));
module.exports = {
  main : resolve('main.js')
}