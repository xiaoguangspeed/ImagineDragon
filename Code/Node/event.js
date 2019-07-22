class myEvent{
  constructor(){
    this.map = {}
  }
  add(name, fn){
    if(this.map[name]){
      this.map[name].push(fn)
      return this
    }
    this.map[name] = [fn]
    return this
  }
  emit(event, ...arg){
    this.map[event].forEach(element => {
      element(...arg)
    });
  }
}
let myEventIns = new myEvent()
myEventIns.add('break', (err, name)=> {
  console.log(err,name)
}).add('work', (err, name) => {
  console.log(err, name)
}).add('work', (err, name) => {
  console.log(err, name)
}).add('break', (err, name)=> {
  console.log(err,name)
})
myEventIns.emit('break','go home')
myEventIns.emit('work','go work')