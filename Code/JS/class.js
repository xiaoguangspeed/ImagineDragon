// 公有字段节
// 静态公有字段和实例公有字段都是可编辑的，可遍历的，可配置的。它们本身不同于私有对应值（private counterparts）的是，它们参与原型的继承。
// 静态公有字段
// 静态公有字段在你想要创建一个只在每个类里面只存在一份，而不会存在于你创建的每个类的实例中的属性时可以用到。
// 我们在声明一个类的时候，使用Object.defineProperty方法将静态公有字段添加到类的构造函数中。
class ClassWithStaticField {
  static staticField = 'static field'
}

console.log(ClassWithStaticField.staticField)
// this super指的是类和父类的构造函数
// 静态公共方法
// 公共实例方法
// 在实例的方法中，this指向的是实例本身，你可以使用super访问到超类的原型，