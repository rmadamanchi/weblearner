// fragment:ts //
function log(value:string):void;
function log(value:number):void;

function log(value:any):void {
    console.log(value);
}

log(1);
log('hello');
//log(true);
