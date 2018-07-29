const nameToUpperCase = (name:string) => name.toUpperCase();
console.log(nameToUpperCase('joker'))

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// 数组
let list1: number[] = [1,2,3];
let list2: Array<number> = [4,5,6];

// 元组 tuple 表示一个已知元素数量和类型的数组，
let x: [string,number];
x = ["hello",133];
console.log(x[0].substr(1))

x[3] = "world";
console.log(x)

// 枚举 enum
enum Color {'red','yellow','blue'};
let c: Color = Color.red;
console.log(c,Color)

// any void
//never 类型 类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；

// 类型断言 <>  as

// 结构数组
let input = [1,2];
let [first,second] = input;
[first,second] = [second,first]
// 对象结构
let o = {a:'foo',b:'bar',c:'zoo'};
let {a,b} = o;