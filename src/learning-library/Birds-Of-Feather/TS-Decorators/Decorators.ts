// fragment:ts //
@component({selector: 'app'})
class App {

}

function component(props:{selector: string}) {
    return function (constructor:Function) {
        console.log("Constructing Component " + constructor);
    };
}

console.log(new App());
