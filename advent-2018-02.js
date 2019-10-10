// var ids = ['bababc', 'abbbbcde'];
var ids = ['abcdef', 'bababc', 'abbcde', 'abcccd', 'aabcdd', 'abcdee', 'ababab'];

// one solution is to split on the letter and then count - 1

var twos = 0;
var threes = 0;

for(var i=0; i<ids.length; i++) {
    var id = ids[i];
    var letters = {};

    for(var y=0; y<id.length; y++) {
        var key = id[y];
        var value = letters[key];
        // console.log('key: ' + key + '; value: ' + value);
        
        if(value === undefined) {
            // console.log('initialize ' + key);
            letters[key] = 1;
        } else {
            letters[key] = value + 1;
            // console.log('increment ' + key);
        }
    }

    console.dir(letters);

    for (const letter in letters) {
        if (letters.hasOwnProperty(letter)) {
            if(letters[letter] === 2) {
                twos++;
            }
            if(letters[letter] === 3) {
                threes++;
            }
        } 
    }
}

console.log('twos: ' + twos);
console.log('threes: ' + threes);
console.log('checksum: ' + (twos * threes));
