// fragment:es5 //
var b = 1;

function run() {
  var b = 2;
  console.log('inside: ' + b);
}

run();
console.log('outside: ' + b);

// fragment:es5 //
var txt = ["a", "b", "c"];

for (var i = 0; i < 3; ++i) {
  var msg = txt[i];
  setTimeout(function () {
    console.log(msg);
  }, i * 1000);
}

// fragment:es5 //
var txt = ["a", "b", "c"];

for (var i = 0; i < 3; ++i) {
  var msg = txt[i];
  print(msg, i);
}

function print(msg, i) {
  setTimeout(function () {
    console.log(msg);
  }, i * 1000);
}
