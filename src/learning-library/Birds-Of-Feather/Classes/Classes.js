// fragment:es5 //
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.getName = function () {
    return this.firstName + " " + this.lastName;
  }
}

var john = new Person("John", "Smith");
var scott = new Person("Bob", "Smith");

console.log(john.getName());
console.log(scott.getName());

// fragment:es6 //
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.firstName + " " + this.lastName;
  }

}

var john = new Person("John", "Smith");
var scott = new Person("Bob", "Smith");

console.log(john.getName());
console.log(scott.getName());

console.log("");
console.log(john.firstName);
console.log(john.lastName);
