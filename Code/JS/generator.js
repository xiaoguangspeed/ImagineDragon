function *fn() {
  console.log('in fn')
  yield a();
  yield b();
  console.log('after fn')
}
function a() {
  console.log('a')
}
function b() {
  console.log('b')
}

var gen = fn()
gen.next()
gen.next()
gen.next()
