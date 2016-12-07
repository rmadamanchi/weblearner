// fragment:ts //
function printPerson(person:{name: string, age: number}) {
    console.log(`${person.name} is ${person.age} years old`);
}

let person = {
    name: 'John Smith',
    age: 30,
    city: 'New York'
};
printPerson(person);

// fragment:ts //
interface Person {
    name: string,
    age: number,
    print: () => void;
}

let person:Person;
person = {
    name: 'John Smith',
    age: 30,
    print: () => {
        console.log(`${person.name} is ${person.age} years old`);
    }
};

person.print();

// fragment:ts //
interface Person {
    name: string,
    age: number,
    city?: string;
    print: () => void;
}

let person:Person;
person = {
    name: 'John Smith',
    age: 30,
    city: 'New York',
    print: () => {
        console.log(`${person.name} is ${person.age} years old`
            + ( person.city ? ` and lives in ${person.city}` : ''));
    }
};
person.print();


// fragment:text //
"ducktyping"

// fragment:ts //
interface Duck {
    walk: () => void;
    swim: () => void;
    quack: () => void;
}

let probablyADuck = {
    walk: () => console.log('walking like a duck'),
    swim: () => console.log('swimming like a duck'),
    quack: () => console.log('quacking like a duck')
};

function doDuckStuff(bird:Duck) {
    bird.walk();
    bird.swim();
    bird.quack()
}

doDuckStuff(probablyADuck);