// fragment:es6 //
let [x, y] = [1, 2];

console.log('x=' + x);
console.log('y=' + y);

[x, y] = [y, x];

console.log('');
console.log('x=' + x);
console.log('y=' + y);

// fragment:es6 //
let person = {
  firstName: 'John',
  lastName: 'Smith',
  age: 25,
  sex: 'M',
  job: {
    company: "Big Bank",
    location: "Columbus"
  }
};

let {firstName, lastName} = person;

console.log(firstName);
console.log(lastName);

let {firstName: first, lastName: last, job: {company : where}} = person;

console.log('\n');
console.log(first);
console.log(last);
console.log(where);

// fragment:es6 //
function get(url, options) {
  console.log(options.timeout);
  console.log(options.cache);
}

get("myurl", {timeout: 5000, cache: false});

console.log('\n');

function post(url, {timeout, cache}) {
  console.log(timeout);
  console.log(cache);
}

post("myurl", {timeout: 5000, cache: false});
