// fragment:es6 //
let array = ['a', 'b', 'c'];

let values = array.values();

let next = values.next();
console.log(next.done + ' - ' + next.value);
next = values.next();
console.log(next.done + ' - ' + next.value);
next = values.next();
console.log(next.done + ' - ' + next.value);
next = values.next();
console.log(next.done + ' - ' + next.value);

console.log('');
for (let value of array.values()) {
  console.log(value);
}

