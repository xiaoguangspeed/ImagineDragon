let date = {date:'2018-08-01'};
let get = () => date;

console.log(get()); 
const arrKeys = Object.getOwnPropertyNames(date);

export class Dep {
  target;
  id;
  subs;

  constructor(){
    this.id = 0;
    this.subs = [];
  }
}