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

class Man extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }

  getName() {
    return 'Mr. ' + super.getName();
  }
}

class Woman extends Person {
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }

  getName() {
    return 'Mrs. ' + super.getName();
  }
}

var john = new Man("John", "Smith");
var lisa = new Woman("Lisa", "Adams");

console.log(john.getName());
console.log(lisa.getName());