// 类型兼容性
// 结构性子类型: 基于类型的组成结构，且不要求明确地声明
// 函数的比较：  类型系统强制源函数的返回值类型必须是目标函数返回值类型的子类型。
// x,y 可以赋值的情形是： x 的参数可以少于y，x的返回值类型可以多于y的
// 协变与逆变
// <(e: Event) => void> 是一个函数泛型
// listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.x + ',' + e.y)));