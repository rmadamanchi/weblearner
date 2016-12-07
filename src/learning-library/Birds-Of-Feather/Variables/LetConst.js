// fragment:es6 //
function run(flag1, flag2) {
  var x = 0;
  if (flag1) {
    var x = 1;
    if (flag2) {
      var x = 10;
    }
  }
  return x;
}

console.log(run(true, false));
console.log(run(true, true));

// fragment:es6 //
for (var i = 0; i < 5; i++) {
  console.log(i);
}
for (let j = 0; j < 5; j++) {
  console.log(j);
}

console.log("");
console.log(i);
console.log(j);
// fragment:es6 //
const MAX_SIZE = 10;

// MAX_SIZE= 10;

console.log(MAX_SIZE);

// fragment:text //
"Dont replace var with let or you will break the internet"