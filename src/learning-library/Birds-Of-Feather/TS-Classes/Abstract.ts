// fragment:ts //
abstract class Person {
    constructor(protected firstName: string, protected lastName: string) {

    }

    abstract getName() : void;

}

class Man extends Person {
    getName() {
        return 'Mr. ' + this.firstName + ' ' + this.lastName;
    }
}

class Woman extends Person {
    getName() {
        return 'Mr. ' + this.firstName + ' ' + this.lastName;
    }
}

console.log(new Man("John", "Smith").getName());
console.log(new Man("Lisa", "Smith").getName());