
let name = data.name // -> get value
data.name = 'yyy' // -> change value
function observe(obj){
    if(!obj || typeof obj !== 'object'){
        return 
    }
    Object.keys(obj).forEach(key => {
        defineReactive(obj,key,obj[key])
    })
}



// 适当的时候给属性添加发布订阅
<div>
{{name}}
</div>
// 在解析如上模板代码时，遇到 {{name}} 就会给属性 name 添加发布订阅。
class Dep{
    constructor(){
        this.subs = []
    }
    addSub(sub){
        //sub 是 watcher 的实例
        this.subs.push(sub)
    }
    notify(){
        this.subs.forEach(sub => {
            sub.update();
        })
    }

}
// 全局属性 通过该属性配置 watcher
Dep.target = null;

function update(value) {
    document.querySelector('div').innerText = value
    }

class Watcher{
    constructor(obj,key,cb){
        Dep.target = this;
        this.cb = cb;
        this.obj = obj;
        this.key = key;
        this.value = obj[key]
        Dep.target = null
    }
    update(){
        this.value = this.obj[this.key]
        this.cb(this.value)
    }
}    
var data = {name: 'jake'};
observe(data);
// 模拟解析到 `{{name}}` 触发的操作
new Watcher(data, 'name', update)
// update Dom innerText
data.name = 'yyy'
// 接下来,对 defneReactive 函数进行改造
function defineReactive(obj,key,val){
    observe(val)
    let dp = new Dep();
    Object.defineProperty(obj,key,{
        enumerable:true,
        configurable:true,
        get: function(){
            // 将watcher添加到订阅
            if(Dep.target){
                dp.addSub(Dep.target)
            }
            return val
        },
        set:function(newVal){
            obj[key] = newVal
            // 执行watcher 的update方法
            dp.notify();
        }
    })
}