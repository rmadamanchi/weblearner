// fragment:es6 //
let generatorFn = function *() {
  console.log('yielding ' + 1);
  yield 1;
  console.log('yielding ' + 2);
  yield 2;
  console.log('yielding ' + 3);
  yield 3;
};

let iterator = generatorFn();
for (let value of iterator) {
  console.log("received: " + value);
}

// fragment:es6 //
let filter = function*(items, predicate) {
  for (let item of items) {
    if (item > 10) {
      return;
    }
    if (predicate(item)) {
      yield item;
    }
  }
};

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12];
for (let n of filter(numbers, (x) => x % 2 == 0)) {
  console.log(n);
}

// fragment:es6 //
let generatorFn = function *() {
  console.log('yielding ' + 1);
  let got1 = yield(1);
  console.log('got ' + got1);

  console.log('yielding ' + 2);
  let got2 = yield 2;
  console.log('got ' + got2);

  console.log('yielding ' + 3);
  let got3 = yield 3;
  console.log('got ' + got3);
};

let it = generatorFn();
it.next();
it.next(100);
it.next(200);
it.next(300);

// fragment: es6 //
let stockTrader = createStockTrader();

function getStockPrice() {
  setTimeout(() => {
    let stockPrice = Math.round(Math.random() * 100) + 1;
    stockTrader.next(stockPrice);
  }, 1000);
}

function* createStockTrader() {
  console.log("trading stocks");

  for (var i = 0; i < 10; i++) {
    let stockPrice = yield getStockPrice();
    if (stockPrice > 70) {
      console.log('sell for ' + stockPrice);
    } else {
      console.log('buy for ' + stockPrice);
    }
  }

  console.log("done trading");
}

stockTrader.next();