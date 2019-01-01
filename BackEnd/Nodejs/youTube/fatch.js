fetch("https://www.v2ex.com/").then( r => {
    console.log('got responce',{
        status:r.status,
        size :r.body.length
    })
})