// fragment:es6 //
$http.get("/api/1", function (value) {
  console.log('API 1 returned');
  $http.get("/api/2", function (value) {
    console.log('API 1 returned');
    $http.get("/api/3", function (value) {
      console.log('API 3 returned');
      $http.get("/api/4", function (value) {
        console.log('API 4 returned');
      }, function (error) {
        console.log("oops " + error);
      })
    }, function (error) {
      console.log("oops " + error);
    })
  }, function (error) {
    console.log("oops " + error);
  });
}, function (error) {
  console.log("oops " + error);
});

$http.get("/api/1").then((value) => {
  console.log('API 1 returned');
  return $http.get("/api/2");
}).then((value) => {
  console.log('API 2 returned');
  return $http.get("/api/3");
}).then((value) => {
  console.log('API 3 returned');
  return $http.get("/api/4");
}).then((value) => {
  console.log('API 4 returned');
}).catch((error) => {
  console.log("oops " + error);
});

// fragment:es6 //
let promise = Promise.resolve("foo");
promise.then((result) => console.log("Promise Resolved: " + result));

// fragment:es6 //
var promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(4), 2000);
});

promise.then((result) => {
  console.log("Promise Resolved: " + result);
  return result + 2;
}).then((result) => {
  console.log("Promise Resolved Again: " + result);
  return result + 4;
}).then((result) => {
  console.log("Promise Resolved Yet Again: " + result);
}).catch((error) => {
  console.log("Promise Rejected:" + error);
});

// fragment:es6 //
var promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(4), 2000);
});

promise.then((result) => {
  console.log("Promise Resolved: " + result);
  return new Promise(function (resolve) {
    setTimeout(() => resolve(result + 2), 2000);
  });
}).then((result) => {
  console.log("Promise Resolved Again: " + result);
  return new Promise(function (resolve) {
    setTimeout(() => resolve(result + 2), 2000);
  });
}).then((result) => {
  console.log("Promise Resolved Yet Again: " + result);
  return new Promise(function (resolve, reject) {
    setTimeout(() => reject("go away"), 2000);
  });
}).catch((error) => {
  console.log("Promise Rejected:" + error);
});


// fragment:es6 //
service.getOrder(orderId).then((order)=> {
  return getUser(order.userId);
}).then((order) => {
  return service.getCompany(order.companyId);
}).then((company) => {
  return company;
}).catch((error) => {
  console.log("Error:" + error);
});

// fragment:es6 //
var promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

var promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(2), 2000);
});

Promise.all(promise1, promise2).then((values) => {
  console.log(values);
});
