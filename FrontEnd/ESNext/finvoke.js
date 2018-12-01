var a = b = 1;
// console.log('iff');
console.log(b);
(
    function(){
        console.log('ffi')
        var a = b = 2;
    }
)()

console.log(b);