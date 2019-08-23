var fn = function(){
  console.log('a')
}
var ar1 = [fn]
var ar2 = ar1.slice()
ar2[0] = function() {
  console.log('2')
}
ar1[0]()
ar2[0]()