//fragment:ts //
let tuple:[string, number];

tuple = ["hello", 10]; // OK

tuple[3] = 'hello again';
tuple[4] = 20;
//tuple[5] = true;

console.log(tuple);
