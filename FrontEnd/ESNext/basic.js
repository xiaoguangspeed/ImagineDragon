// slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
var cat = {'color':'red'};
var animal={cat};
console.log(animal);  //{ cat: { color: 'red' } }


console.log( exports == this)