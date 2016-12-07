// fragment:ts //
//shapes.ts
namespace Shapes {
    export interface Circle {
        radius(): number;
    }

    export interface Square {
        length(): number;
    }

    export let NAME = "Shapes";

    export function list() {
        return ["circle", "square"];
    }
}

/// <reference path="shapes.ts" />
class MyShape implements Shapes.Circle {
    radius():number {
        return 10;
    }
}

console.log(Shapes.NAME);
console.log(Shapes.list());