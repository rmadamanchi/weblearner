// fragment:es6 //
var set = new Set();
set.add(1);
set.add(2);
set.add(2);
console.log(set.size);

console.log('');
console.log(set.has(1));
console.log(set.has(3));

set.delete(2);
console.log('');
console.log(set.size);
console.log(set.has(2));
