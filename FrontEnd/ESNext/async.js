const sleep = (time) => new Promise((resolve) => {
    setTimeout(resolve, time);
})


async function myFunc(){
    for(var i=0;i<5;i++){
        if(i>0){
            await sleep(1000)
        }
        console.log(i)
    }

    await sleep(1000)
    console.log(i)
}

myFunc()