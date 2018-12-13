
// if(!('a' in window)){
//     var a = 1;
// }
// console.log(a)   //undefined
var a = b = 1;
(function(){
    var a = b = 4;
})()
// console.log(a)
console.log(b)   //4

var fullname = 'zhangsan'
var obj = {
    fullname: 'wangwu',
    prop:{
        fullname :'liliu',
        getfullname:function(){
            console.log(this)
            return this.fullname;
        }
    }
}

console.log(obj.prop.getfullname())
var test = obj.prop.getfullname;
console.log(test())
console.log(test.call(obj.prop))