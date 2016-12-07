// fragment:es6 //
class Shape {

  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  static get CIRCLE() {
    return new Shape("circle");
  }

  static get SQUARE() {
    return new Shape("square");
  }

}

console.log(Shape.CIRCLE.name);
console.log(Shape.SQUARE.name);

console.log(new Shape("cube").SQUARE);