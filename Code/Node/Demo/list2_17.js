function Bomb() {
  this.message = 'bomb'
}
Bomb.prototype.explor = function() {
  console.log(this.message)
}

var bomb = new Bomb()
setTimeout(bomb.explor.bind(bomb), 1000);