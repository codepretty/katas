describe("FizzBuzz", function() {
  var FizzBuzz = require('../lib/fizzBuzz');
  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  })

  it("3 should return Fizz", function() {
    expect(fizzBuzz.process(3)).toEqual('Fizz');
  });

  it("4 should return 4", function() {
    expect(fizzBuzz.process(4)).toEqual(4);
  });

  it("5 should return Buzz", function() {
    expect(fizzBuzz.process(5)).toEqual('Buzz');
  });

  it("15 should return FizzBuzz", function() {
    expect(fizzBuzz.process(15)).toEqual('FizzBuzz');
  });

});
