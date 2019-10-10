describe("Calculator", function() {
  var Calc = require('../lib/calculator');
  var calc;

  beforeEach(function() {
    calc = new Calc();
  });

  it("`` should return 0", function() {
    expect(calc.add("")).toEqual(0);
  });

  it("`1` should return 1", function() {
    expect(calc.add("1")).toEqual(1);
  });

  it("`1,1` should return 2", function() {
    expect(calc.add("1,1")).toEqual(2);
  });
  
  it("`1,1, 3` should return 5", function() {
    expect(calc.add("1,1, 3")).toEqual(5);
  });
  
  it("`1,4,-3` should return 2", function() {
    expect(calc.add("1,4,-3")).toEqual(2);
  });

  it("`1;1,1` should return 3", function() {
    expect(calc.add("1;1,1")).toEqual(3);
  });
  
  xit("`1;1\\n13` should return 15", function() {
    expect(calc.add("1;1\\n13")).toEqual(15);
  });
});
