describe("Calculator", function() {
  var Calc = require('../lib/calculator');
  var calc;

  beforeEach(function() {
    calc = new Calc();
  });

  it("`2 + 3` should return 5", function() {
    expect(calc.add(2, 3)).toEqual(5);
  });
});
