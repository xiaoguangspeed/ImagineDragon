Array.prototype.unique = function(){
    var res = [];
    for(var i=0;i<this.length;i++){
        if(res.indexOf(this[i]) == -1) res.push(this[i])
    }
    return res;
}