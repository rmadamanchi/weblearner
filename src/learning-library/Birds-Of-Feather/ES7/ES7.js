// fragment:es7 //
// Array Comprehensions
let numbers = [1, 4, 9];

[for (num of numbers) Math.sqrt(num)];
// => [ 1, 2, 3 ]

[for (x of [1, 2, 3]) for (y of [3, 2, 1]) x * y];
// => [ 3, 2, 1, 6, 4, 2, 9, 6, 3 ]

[for (x of [1, 2, 3, 4, 5, 6]) if (x % 2 === 0) x];
// => [ 2, 4, 6 ]

// fragment:es7 //
// Async Functions
function wait(t) {
  return new Promise((r) => setTimeout(r, t));
}

async function asyncMania() {
  console.log("1");
  await wait(1000);
  console.log("2");
}

asyncMania()
    .then(() => alert("3"));

// logs: 1 2 3

// fragment:es7 //
// Async Generators

// provider
async function* nums() {
  yield 1;
  yield 2;
  yield 3;
}

// consumer
async function printData() {
  for(var x on nums()) {
    console.log(x);
  }
}

// fragment:es7 //
var obj = {};

Object.observe( obj,function(changes) {console.log(changes);} );

obj.name = "blah";

// Would log -> [ { type: 'new', object: { name: 'hemanth' }, name: 'name' } ]

// fragment:es7 //
let array = [1,2,3];
array.includes(2);