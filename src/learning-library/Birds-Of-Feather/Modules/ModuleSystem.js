// fragment:es6 //

// lib.js
export const sqrt = Math.sqrt;
export function square(x) {
  return x * x;
}
export function diag(x, y) {
  return sqrt(square(x) + square(y));
}

// main.js
import { square, diag as d } from 'lib';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5

// main.js
import * as lib from 'lib';
console.log(lib.square(11)); // 121
console.log(lib.d(4, 3)); // 5