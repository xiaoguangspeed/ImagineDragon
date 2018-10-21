// slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
var cat = {'color':'red'};
var cat2 ={ 'color':'green'};
console.log({...cat,...cat2})
var animal={cat};
console.log(animal);  //{ cat: { color: 'red' } }

let { color } = cat;
console.log(color)  //'red'

console.log( exports == this)

let connect = myConnect(...args)(1,23)