// fragment:es6 //
let array = [1, 2, 3];
console.log(array);
console.log(...array);

// fragment:es6 //
function add(...numbers) {
  let result = 0;
  numbers.forEach((n) =>  result += n);
  return result;
}

console.log(add(...[1, 2, 3]));

// fragment:es6 //
let array1 = ['a', 'b', 'c'];
let array2 = [1, 2, 3, ...array1, 4, 5, 6];
console.log(array2);
