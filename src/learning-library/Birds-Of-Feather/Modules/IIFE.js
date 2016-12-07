// fragment:es6 //
function get(url) {
  return url + " response";
}

console.log(get("/api/test1"));
console.log(get("/api/test2"));


console.log('\n');
console.log(get);
// fragment:es6 //

(function () {
  function get(url) {
    return url + " response";
  }

  console.log(get("/api/test1"));
  console.log(get("/api/test2"));
})();


console.log('\n');
console.log(get);
