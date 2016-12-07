// fragment:es6 //
function sayHello(name = "John") {
  console.log("Hello " + name + " !");
}

sayHello("Max");
sayHello("");
sayHello();
sayHello(undefined);

// fragment:es6 //
function defaultName() {
  return "John";
}

function sayHello(name = defaultName()) {
  console.log("Hello " + name + " !");
}

sayHello("Max");
sayHello("");
sayHello();
sayHello(undefined);

// fragment:text //
"Cannot use default parameters with Rest"