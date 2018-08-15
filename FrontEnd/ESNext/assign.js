let obj1 = {a:1};
Object.assign(obj1,{b:2,c:3});
console.log(obj1);
console.log({...obj1,d:4})