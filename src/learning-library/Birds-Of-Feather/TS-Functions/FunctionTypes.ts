// fragment:ts //
function add(num1:number, num2:number):number {
    return num1 + num2;
}

console.log(add(2, 3));


// fragment:ts //
let log:(message:string) => void;

log = (message) => console.log(message);

log('test');

// fragment:ts //
enum Operation {Add, Multiply}

function performOp(op:Operation = Operation.Add, ...numbers:number[]) {
    switch (op) {
        case Operation.Add:
            return numbers.reduce((previous:number, current:number) => previous + current);
        case Operation.Multiply:
            return numbers.reduce((previous:number, current:number) => previous * current);
    }
}

console.log(performOp(Operation.Add, 1, 10));
console.log(performOp(Operation.Multiply, 1, 10));
console.log(performOp(undefined, 1, 10));