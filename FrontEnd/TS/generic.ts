function identity<T>(arg: T): T {
    // 类型变量  不同于使用 any，它不会丢失信息
    return arg;
}

let output1 = identity<string>("string");
let output2 = identity("string");  //类型推断

function loggingIdentity<T>(arg: T[]) :T[]{
    // 泛型函数loggingIdentity，接收类型参数T和参数arg
    console.log(arg.length);
    return arg;
}
function loggingIdentity2<T>(arg: Array<T>): Array<T>{
    // 泛型函数loggingIdentity，接收类型参数T和参数arg
    console.log(arg.length);
    return arg;
}
// 泛型类型
// 函数本身的类型

let myIdentity: <T>(arg: T) =>T = identity;
let myIdentity2: {<T>(arg: T): T} = identity; //调用签名的对象字面量