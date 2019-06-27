interface Person {
  name: string;
  age: number;
  location: string;
}

type k1 = keyof Person

// 查找类型
type k2 = string["charAt"] // (pos: number) => string
type k3 = string[]["push"] // (...items: string[]) => number

type k4 = Person
let ming: k4 = {
  name: 'jake',
  age: 4,
  location: 'beijing'
}
console.log(ming)
let parr: (keyof Person)[] = ['name', 'age']
