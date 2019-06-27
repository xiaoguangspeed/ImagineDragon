// 每个枚举成员都带有一个值，它可以是 常量或 计算出来的。 
enum E {
  X = 'joker'
}
// 运行时的枚举
// 枚举是在运行时真正存在的对象。 
// 数字枚举会生成反向映射
console.log(E.X)

enum FileAccess {
  // constant members
  None,
  Read    = 1 << 1,
  Write   = 1 << 2,
  ReadWrite  = Read | Write,
  // computed member
  G = "123".length
}

console.log(FileAccess.Read, FileAccess.Write)
// 另一个变化是枚举类型本身变成了每个枚举成员的 联合。 
// 外部枚举不太清楚是干什么用的 :_(
declare enum Enum {
  A = 1,
  B,
  C = 2
}
// 类型推论
// 联合数组类型
let au : ( number | null)[] = [1, null]