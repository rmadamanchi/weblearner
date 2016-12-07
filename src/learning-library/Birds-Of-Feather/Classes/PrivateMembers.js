// fragment:es6 //
var firstNameProperty = Symbol();
var lastNameProperty = Symbol();

class Person {
  constructor(firstName, lastName) {
    this[firstNameProperty] = firstName;
    this[lastNameProperty] = lastName;
  }

  getName() {
    return this[firstNameProperty] + ' ' + this[lastNameProperty];
  }

}

var john = new Person("John", "Smith");
var scott = new Person("Bob", "Smith");

console.log(john.getName());

console.log("");
console.log(john.firstName);
console.log(john.lastName);

// fragment:es6 //
var nameProperty = Symbol();

class Person {
  constructor(firstName, lastName) {
    this[nameProperty] = firstName + ' ' + lastName;
  }

  get name() {
    return this[nameProperty];
  }

  set name(name) {
    this[nameProperty] = name;
  }

}

var john = new Person("John", "Smith");

console.log(john.name);
john.name = "Bob";
console.log(john.name);

// fragment:es6 //
class Person {
  constructor(firstName, lastName) {
    this.name = firstName + ' ' + lastName;
  }

  get name() {
    return this.name;
  }

  set name(name) {
    this.name = name;
  }

}

var john = new Person("John", "Smith");

console.log(john.name);
john.name = "Bob";
console.log(john.name);
