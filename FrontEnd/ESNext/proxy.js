let handler = {
  get:function(target,name){
    return name in target?target[name]:37;
  }
}

let p = new Proxy({},handler);
p.a = 1;
console.log('b' in p,p.b)