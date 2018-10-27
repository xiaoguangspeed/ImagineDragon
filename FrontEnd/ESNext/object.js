let config = {
  a:'',
  get person(){ return {'name':'jake'}},
  set setP(name){ this.a = name}
};
config.setP = 'rose';
console.log(config.person)
console.log(config.a)