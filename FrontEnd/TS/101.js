var _a;
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
// 数组
var list1 = [1, 2, 3];
var list2 = [4, 5, 6];
// 元组 tuple 表示一个已知元素数量和类型的数组，
var x;
x = ["hello", 133];
console.log(x[0].substr(1));
x[3] = "world";
console.log(x);
// 枚举 enum
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["yellow"] = 1] = "yellow";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
;
var c = Color.red;
console.log(c, Color);
// any void
//   - void类型像是与any类型相反，它表示没有任何类型。 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
//never 类型 类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；
// 类型断言 <>  as
var ro = [1, 2, 3, 4];
var someArr = ro;
// 解构数组
var input = [1, 2];
var first = input[0], second = input[1];
_a = [second, first], first = _a[0], second = _a[1];
// 对象解构
var o = { a: 'foo', b: 'bar', c: 'zoo' };
var a = o.a, b = o.b;
