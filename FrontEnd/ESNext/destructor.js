var foo = {
    a:3,
    b:{
        c:4,
    },
    d:[1,2,3]
}
var { c:e } = foo.b
var [f] = foo.d;
console.log(f)
console.log(e)