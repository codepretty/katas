function Calculator() {
}

Calculator.prototype.add = function(nums) {
    // is 0 if there is an empty string supplied
    if(nums.length === 0) return 0;
    
    var numArr = nums.split(/\s*(?:[,;]|$)\s*/g);
    console.log(numArr);

    // is the number if there is only one number supplied
    if(numArr.length === 1) return parseInt(numArr[0]);

    // add up numbers if more than one number supplied
    var total = 0;
    numArr.forEach((num) => {
        total += parseInt(num);
    })
    return total;
}


module.exports = Calculator;