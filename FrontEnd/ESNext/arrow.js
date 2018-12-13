function Person(){
    this.age = 0;
  
    setInterval(() =>{
      this.age++; // |this| 正确地指向person 对象
      console.log(this.age)
    }, 1000);
  }
  
  var p = new Person();