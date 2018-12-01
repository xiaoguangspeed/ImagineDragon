function _parseInt(str,radix){
    var res = 0;
    if(typeof str != "string" && typeof str != "number"){
        return NaN;
    }
    str = String(str).trim().split(".")[0]
    let len = str.length;
    if(!len){
        return NaN;
    }
    if(!radix) {
        radix = 10;
    }
    if(typeof radix !== 'number'|| radix <2 || radix >36){
        return NaN;
    }
    for(let i=0;i<len;i++){
        let arr = str.split("");
        res += Math.floor(arr[i])*Math.pow(radix,len-i-1)
    }
    return res;
}
console.log(_parseInt('123564',10))