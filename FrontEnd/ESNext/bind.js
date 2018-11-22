var myObj = {
  someFn:function(){
    console.log('in someFn')
  },
  getAsyncData:function(cb){
    cb();
  },
  render:function(){
    this.getAsyncData(function(){
      this.someFn();
    }).bind(this);
  }
}
myObj.render();