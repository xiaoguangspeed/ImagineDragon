// import React {suspence, lazy} from react;

let props = { name: 'jake', 'job': 'fe', age: 25}
let { name, ...passThrough} = props
console.log(name,passThrough)