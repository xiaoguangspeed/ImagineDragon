// 在构造函数中使用时，super关键字将单独出现，并且必须在使用this关键字之前使用。super关键字也可以用来调用父对象上的函数。
/*
    注意: 在派生的类中, 在你可以使用'this'之前, 必须先调用super()。
    忽略这, 这将导致引用错误。
*/
// super 可以调用父类的静态方法
class Human{
  constructor(){
  }
  static ping(){
    console.log('ping');
  }
}
class Computer extends Human{
  constructor(){}
  static pong(){
    super.ping();
    console.log('pong')
  }
}

Computer.pong();


// 在对象字面量中使用super.prop
var obj1 = {
  method1() {
    console.log("method 1");
  }
}

var obj2 = {
  method2() {
   super.method1();
  }
}

Object.setPrototypeOf(obj2, obj1);
obj2.method2(); 
// logs "method 1"