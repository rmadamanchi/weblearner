// fragment:ts //
class Person {
    firstName:string;
    lastName:string;

    constructor(firstName:string, lastName:string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    print() {
        console.log(this.firstName + " " + this.lastName);
    }
}

let p:Person = new Person("John", "Smith");
p.print();

console.log();
console.log(p.firstName + p.lastName);

// fragment:ts //
class Person {

    constructor(public firstName:string, public lastName:string) {
    }

    print() {
        console.log(this.firstName + " " + this.lastName);
    }
}

let p:Person = new Person("John", "Smith");
p.print();

console.log('');
console.log(p.firstName + '-' + p.lastName);

// fragment:ts //
class Person {

    constructor(private firstName:string, private lastName:string) {
    }

    print() {
        console.log(this.firstName + " " + this.lastName);
    }

    get name() {
        return this.firstName + ' ' + this.lastName;
    }
}

let p:Person = new Person("John", "Smith");
p.print();

console.log('');
//console.log(p.firstName + '-' + p.lastName);
console.log(p.name);