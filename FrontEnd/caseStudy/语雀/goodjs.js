var foo = {"name":'jake'};
// 计算属性名
console.log({ foo });
// add css style
console.log("%c hello console","color:green");

console.table([foo]);
// stack trace logs
const deleteMe = () => console.trace("bye bye");
deleteMe();

let animal = {
    name:"tutle",
    age:27,
    legs:4
};
function feed(animal){
    const {name ,age } = animal;
    console.log(`${name} is ${age}`)
}
feed(animal);

// template literal
function horseAge(str,age){
    const agestr = age > 5? 'old' :'young';
    console.log(str)  //["horse is ", " oh"]
    return `${str[0]}${agestr} at ${age}`
}
console.log(horseAge`horse is ${8} oh`);
// spread syntax
var coins = ['btc'];
var coins2 = ['eth','eos'];
console.log(['bth',...coins2,])
// async await
function random(){
    return Promise.resolve(Math.random());
}

// function sumofrandom(){
//     var first;
//     var second;
//     var third;
//     return random()
//         .then(v =>{
//             first = v;
//             return random()
//         })
//         .then(v =>{
//             second = v;
//             return random()
//         })
//         .then(v =>{
//             third  = v;
//             return first + second + third;
//         })
//         .then( v =>{
//             console.log(`result is ${v}`)
//         })
// }

const sumofrandom = async() =>{
    var first = await random()
    var second = await random()
    var third = await random()
    console.log(`result is ${first+second+third}`)
}
sumofrandom()


