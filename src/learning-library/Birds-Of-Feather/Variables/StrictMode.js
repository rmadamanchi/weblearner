// fragment: es5 //

badVar = 10;
console.log(badVar);

// fragment: es5 //
function badFunc(param, param) {
  console.log(param);
}
badFunc(1, 2);

// fragment: es5 //
var obj = {prop1: "propery 1 ", prop2: "property 2"};
with (obj) {
  console.log(prop1);
  console.log(prop2);
}

// fragment: es5 //
var eval = 10;
var arguments = ['a', 'b'];
console.log(eval);
console.log(arguments);

// fragment: es5 //
var obj = {
  prop1: 1,
  prop2: 2,
  prop1: 3
};
console.log(obj);
