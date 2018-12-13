const tasks = [];
// for(var i = 0;i<5;i++){
//     ((j) => {
//         tasks.push(new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 console.log(j);
//                 resolve()
//             },1000*j)
//         }))
//     })(i)
// }

const output = (i) => new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(i)
            resolve()
        }, 1000*i);
    })

for(var i=0;i<5;i++){
    tasks.push(output(i))
}

Promise.all(tasks).then(()=>{
    setTimeout(() => {
        console.log(i,'yes')
    },1000)
})