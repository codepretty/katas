function FizzBuzz() {
}

FizzBuzz.prototype.process = function(num) {
    if((num%3 === 0) && (num%5 === 0)) {
        console.log('divisible by 3 and 5');
        return "FizzBuzz"
    } else if (num%3 === 0) {
        return "Fizz"
    } else if (num%5 === 0) {
        return "Buzz"
    }

    return num;
}

module.exports = FizzBuzz;