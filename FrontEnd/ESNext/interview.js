// let a = 3;
// console.log(window.a);   //undefined

// let a = 3;
// function Foo(){
//     this.a = 4;
//     var bar = () =>{
//         console.log(this)
//         console.log(this.a);
//     }
//     bar()
// }

// var res = new Foo();

// var a = 3;
// function add(m){
//     return m +a;
// }
// console.log(add)
// console.log(add(2)) //NaN
// var b = 4;
// function add(n){
//     return n + b;  //9 
// }
// console.log(add)
// console.log(add(5))

// setTimeout(function(){
//     console.log(1);
//     return new Promise((resolve,reject)=>{
//         console.log(2)
//         resolve();
//     })
// },1000)

// new Promise(function(resolve,reject){
//     console.log(3);
//     resolve(4)
// }).then((val) =>{
//     console.log(val);
//     return new Promise((resolve,reject) =>{
//         resolve(val)
//     })
// },(reson) =>{
//     console.log(reson)
// }).then((val)=>{
//     console.log(val)
// })

// process.nextTick( ()=>{
//     console.log(5)
// })

var x=0, y=0;
x
++
y
console.log(x,y)  //0,1