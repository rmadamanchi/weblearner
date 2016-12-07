// fragment:es6 //
var fn1 = function () {
  return 1;
};

var fn2 = () => {
  return 2;
};

var fn3 = () => 3;

console.log(fn1());
console.log(fn2());
console.log(fn3());

// fragment:es6 //
var sqrt1 = function (x) {
  return x * x
};

var sqrt2 = (x) => {
  return x * x
};

var sqrt3 = (x) => x * x;

console.log(sqrt1(2));
console.log(sqrt2(3));
console.log(sqrt3(4));

// fragment:es6 //
var Person = {
  firstName: 'John',
  lastName: 'Smith',
  printName: function () {
    setTimeout(function () {
      console.log(this.firstName + " " + this.lastName);
    }, 1000);

  }
};

Person.printName();

// fragment:es6 //
var Person = {
  firstName: 'John',
  lastName: 'Smith',
  printName: function () {
    setTimeout(()  => {
      console.log(this.firstName + " " + this.lastName);
    }, 1000);

  }
};

Person.printName();
