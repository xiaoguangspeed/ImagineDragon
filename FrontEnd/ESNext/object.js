let config = {
  a:'',
  get person(){ return {'name':'jake'}},
  set setP(name){ this.a = name}
};
config.setP = 'rose';
console.log(config.person)
console.log(config.a)

//////////////////////////////////////////////////////////
global.title = '2019-03-28'
let a = {
  title : '2019-04-28',
  alias: this.title,
  show :function() {
    console.log(this)
    console.log(1,this.title)
    console.log(2,this.alias)
  },
  ashow: () => {
    console.log(this)
    console.log(3,this.title)
    console.log(4,this.alias)
  }
}
a.show()
var b = a.show;
b()
a.ashow()