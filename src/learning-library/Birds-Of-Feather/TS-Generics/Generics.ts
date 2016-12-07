// fragment:ts //
let stringArray:Array<String>;

stringArray = ['hello', 'buddy'];
//stringArray = [1, 2, 3];

// fragment:ts //

function logAndReturn<T>(thing:T):T {
    console.log(thing);
    return thing;
}

console.log(logAndReturn("message"));

interface Person {
    firstName: string;
}

let person:Person = {firstName: "John"};
console.log(logAndReturn<Person>(person));