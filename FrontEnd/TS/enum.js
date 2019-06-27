// 每个枚举成员都带有一个值，它可以是 常量或 计算出来的。 
var E;
(function (E) {
    E["X"] = "joker";
})(E || (E = {}));
// 运行时的枚举
// 枚举是在运行时真正存在的对象。 
// 数字枚举会生成反向映射
console.log(E.X);
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
console.log(FileAccess.Read, FileAccess.Write);
console.log(Enum.A, Enum.B, Enum.C);
