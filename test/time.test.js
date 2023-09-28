const time = require("../src/time");

test("should return '0s' for 0 seconds", function () {
  // setup
  const seconds = 0;

  // execute
  const result = time(seconds);

  // expectation
  expect(result).toEqual("0s");
}); 
// test/time.test.js

// other tests...

test("should return '2s' for 2 seconds", function () {
  // setup
  const seconds = 2;

  // execute
  const result = time(seconds);

  // expectation
  expect(result).toEqual("2s");
});

test("should return '3s' for 3 seconds", function () {
  // setup
  const seconds = 3;

  // execute
  const result = time(seconds);

  // expectation
  expect(result).toEqual("3s");
});
test("should return '59s' for 59 seconds", function () {
  // setup
  const seconds = 59;

  // execute
  const result = time(seconds);

  // expectation
  expect(result).toEqual("59s");
});
// test/time.test.js

// other tests...

test("should return '1m' for 60 seconds", function () {
  // setup
  const seconds = 60;

  // execute
  const result = time(seconds);

  // expectation
  expect(result).toEqual("1m");
});
// test/time.test.js

// other tests...

test("should return '2m' for 120 seconds", function () {
  // setup
  const seconds = 120;

  // execute
  const result = time(seconds);

  // expectation
  expect(result).toEqual("2m");
});
// test/time.test.js

// other tests...

test("should return '3m' for 180 seconds", function () {
  // setup
  const seconds = 3 * 60;

  // execute
  const result = time(seconds);

  // expectation
  expect(result).toEqual("3m");
});

test("should return '59m' for 59 minutes", function () {
  // setup
  const seconds = 59 * 60;

  // execute
  const result = time(seconds);

  // expectation
  expect(result).toEqual("59m");
});