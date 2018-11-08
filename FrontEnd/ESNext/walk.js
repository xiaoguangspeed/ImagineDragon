function walk (data) {
  for (let key in data) {
    const dep = []
    let val = data[key]
    // 如果 val 是对象，递归调用 walk 函数将其转为访问器属性
    const nativeString = Object.prototype.toString.call(val)
    if (nativeString === '[object Object]') {
      walk(val)
    }
    Object.defineProperty(data, key, {
      set (newVal) {
        if (newVal === val) return
        val = newVal
        dep.forEach(fn => fn())
      },
      get () {
        dep.push(Target)
        return val
      }
    })
  }
}

walk(data)

/////////////////////////////我的实现////////////////////////////


function walk(data){
  for(let key in data){
    const dep = [];
    let val = data[key];
    if(Object.prototype.toString.call(data[key] === "[object,Object]")){
      walk(data[key])
    }else{
      Object.defineProperty(data,key,{
        set(newVal){
          if(newVal === val) return ;
          val = newVal;
          dep.forEach(fn => fn())
        },
        get(){
          dep.push(Target)
          return val;
        }
      })
    }
  }
}