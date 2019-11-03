'use strict'
// import React {suspence, lazy} from react;

// let props = { name: 'jake', 'job': 'fe', age: 25}
// let { name, ...passThrough} = props
// console.log(name,passThrough) //jake { job: 'fe', age: 25 }

// eg.2
var person = {
  name1: 'luke'
}
Object.defineProperty(person, 'name', {
  get: function() {
    console.log('in getter')
    return this.name1
  },
  set: function(val) {
    console.log('in setter')
    this.name1 = val
  }
})
console.log(person.name)
person.name = 'gaga'
