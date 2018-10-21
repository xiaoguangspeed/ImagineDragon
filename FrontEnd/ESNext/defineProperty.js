// 描述
 

// 该方法允许精确添加或修改对象的属性。通过赋值操作添加的普通属性是可枚举的，能够在属性枚举期间呈现出来（for...in 或 Object.keys 方法）， 这些属性的值可以被改变，也可以被删除。
// 这个方法允许修改默认的额外选项（或配置）。默认情况下，使用 Object.defineProperty() 添加的属性值是不可修改的。


// 属性描述符
 

// 对象里目前存在的属性描述符有两种主要形式：数据描述符和存取描述符。数据描述符是一个具有值的属性，该值可能是可写的，也可能不是可写的。存取描述符是由getter-setter函数对描述的属性。
// 描述符必须是这两种形式之一；不能同时是两者。

// 数据描述符和存取描述符均具有以下可选键值：

// configurable
// 当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。默认为 false。
// enumerable
// 当且仅当该属性的enumerable为true时，该属性才能够出现在对象的枚举属性中。默认为 false。
// 数据描述符同时具有以下可选键值：

// value
// 该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined。
// writable
// 当且仅当该属性的writable为true时，value才能被赋值运算符改变。默认为 false。
// 存取描述符同时具有以下可选键值：

// get
// 一个给属性提供 getter 的方法，如果没有 getter 则为 undefined。当访问该属性时，该方法会被执行，方法执行时没有参数传入，但是会传入this对象（由于继承关系，这里的this并不一定是定义该属性的对象）。
// 默认为 undefined。
// set
// 一个给属性提供 setter 的方法，如果没有 setter 则为 undefined。当属性值修改时，触发执行该方法。该方法将接受唯一参数，即该属性新的参数值。
// 默认为 undefined。
// 描述符可同时具有的键值
//  	configurable	enumerable	value	writable	get	set
// 数据描述符	Yes	Yes	Yes	Yes	No	No
// 存取描述符	Yes	Yes	No	No	Yes	Yes
// 如果一个描述符不具有value,writable,get 和 set 任意一个关键字，那么它将被认为是一个数据描述符。如果一个描述符同时有(value或writable)和(get或set)关键字，将会产生一个异常。

// 记住，这些选项不一定是自身属性，如果是继承来的也要考虑。为了确认保留这些默认值，你可能要在这之前冻结 Object.prototype，明确指定所有的选项，或者通过 Object.create(null)将__proto__属性指向null。

let config = {};
Object.defineProperty(config,"url",{
  enumerable:true,
  value :"127.0.0.1"
})
config.url = "192.168" //不可修改的，但是也没报错
// 如果查询的对象属性不存在，那么返回undefined
let property = Object.getOwnPropertyDescriptor(config,"url2");

console.log('config',config);
console.log('property',property);

Object.keys(config).forEach((key,index) => {
  Object.defineProperty(config,key,{
    enumerable:true,
    configurable:true,
    get:() => config[key],
    set:(newVal) => {
      config[key] = newVal;
    }
  })
})
config2.url = "192.178"
console.log('config',config)

