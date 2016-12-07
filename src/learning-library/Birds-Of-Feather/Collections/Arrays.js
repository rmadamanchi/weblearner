// fragment:es5 //
var array = ['a', 'b', 'c'];
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// fragment:es5 //
['a', 'b', 'c'].forEach(function (a) {
  console.log(a);
});

// fragment:es5 //
var array = ['a', 'b', 'c'];
for (var i in array) {
  console.log(i + ' - ' + array[i]);
}

// fragment:es6 //
var array = ['a', 'b', 'c'];
for (let e of array) {
  console.log(e);
}

// fragment:es6 //
var filtered = [1, 2, 3, 4, 5].filter(function (elem) {
  return elem % 2 === 0;
});

console.log(filtered);

// fragment:es6 //
var reduced = [1, 2, 3, 4, 5].reduce(function (previousValue, currentValue) {
  console.log('previousValue=' + previousValue + ' currentValue=' + currentValue +
      ' - returning: ' + (previousValue + currentValue));
  return previousValue + currentValue;
});

console.log(reduced);
// fragment:es6 //
var mapped = ["1", "2", "3", "4"].map(function (element) {
  return element + 'x';
});

console.log(mapped);

// fragment:es6 //
console.log(new Array(1, 2, 3));
console.log(new Array(10));

console.log('');

console.log(Array.of([1, 2, 3]));
console.log(Array.of(10));

// fragment:text //
"some/every/reduceRight/indexOf/lastIndexOf"
