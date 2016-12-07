// fragment:es6 //
var map = new Map();
map.set(1, "a");
map.set(2, "b");

console.log(map.has(1));
console.log(map.has("1"));
console.log(map.size);

console.log('-- entries --');
for (let entry of map) {
  console.log(entry);
}

console.log('-- keys --');
for (let key of map.keys()) {
  console.log(key);
}

console.log('-- values --');
for (let value of map.values()) {
  console.log(value);
}
// fragment:text //
"WeakMap/WeakMap"
