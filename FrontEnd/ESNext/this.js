let obj = {
    name:'jake',
    getName:function(){
        console.log(this)
    },
    getName2:()=>{
        console.log(this)
    },
    child:{
        name:"rose",

    }

}

obj.getName()
obj.getName2()
