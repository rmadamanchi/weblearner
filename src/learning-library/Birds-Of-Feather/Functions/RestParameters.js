// fragment:es6 //
function add(...numbers) {
  let result = 0;
  numbers.forEach((n) =>  result += n);
  return result;
}

console.log(add(1, 2, 3));
