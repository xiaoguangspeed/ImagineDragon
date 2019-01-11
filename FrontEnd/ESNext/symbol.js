let log = console.log
const s1 = Symbol()
const s2 = Symbol('123')
// 每一个symbol value returned from Symbol is unique.
log(s1)
log(s2)
log(typeof s1)
log(s2.toString())