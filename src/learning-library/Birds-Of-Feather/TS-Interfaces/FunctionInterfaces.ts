// fragment:ts //
interface NumberOperationFunc {
    (number1:number, number2:number): number;
}

let add:NumberOperationFunc = function (n1:number, n2:number) {
    return n1 + n2;
};

let subtract:NumberOperationFunc = function (n1:number, n2:number) {
    return n1 - n2;
};

console.log(add(1, 2));
console.log(subtract(10, 5));
