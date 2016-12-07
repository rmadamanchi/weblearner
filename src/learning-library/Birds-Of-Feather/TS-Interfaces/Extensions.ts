// fragment:ts //
interface Shape2D {
    length: number;
    width: number;
}

interface Rollable {
    roll: () => void;
}

interface Stackable {
    stack: () => void;
}

interface Shape3D extends Shape2D {
    height: number
}

interface Cube extends Shape3D, Stackable {

}

let cube:Cube = {
    length: 10,
    width: 10,
    height: 20,
    stack: ()=> {
    }
};