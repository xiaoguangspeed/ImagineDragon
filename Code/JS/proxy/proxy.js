var obj = {
    a: 1,
    b: 2
}
var handler = {
    get: function(target, propertyName) {
        var value = target[propertyName]
        if(!value && value !== 0) {
            console.warn("trying to get non-exiting property")
            return 0
        }
        return value+1
    },
    set: (target, key, value) => {
        target[key] = value -1
        return true
    }
}
var proxyObj = new Proxy(obj,handler)
console.log(obj.a) // 1
console.log(proxyObj.a) //2
obj.b = 3
console.log(obj.b)
proxyObj.c = 4
console.log(obj.c)

//观察对象的状态
const observe = (object, callback) => {
    return new Proxy(object, {
      set(target, propKey, value) {
        const oldValue = target[propKey];
      
        target[propKey] = value;
   
        callback({
          property: propKey,
          newValue: value,
          oldValue,
        });
   
        return true;//必须返回true，不然会抛出typeerror
      }
    });
   };
   
   const a = observe({ b: 1 }, arg => {
    console.log(arg);
   });
   
   a.b = 5; // -> logs from the provided callback: {property: "b", oldValue: 1, newValue: 5}