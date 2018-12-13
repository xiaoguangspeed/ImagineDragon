var obj = {
    name:{
        a:'jake',
        b:'rose',
        child:{
            c:'alice',
            d:{
                e:'wolf'
            }
        }
    },
    value:5
}


function flatten(obj,propertyName="",res={}){
    if(Object.keys(obj).length == 0){
        return {};
    }else{
        for(var key in obj){
            if(typeof obj[key] === 'object'){
                if(obj[key].constructor === Object){
                    propertyName += key +"__";
                    
                    flatten(obj[key],propertyName,res)
                }
            }else{
                res[propertyName+key] = obj[key]
            }
        }
    }
    return res;
}

console.log(flatten(obj));