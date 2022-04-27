// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // declare an empty string
    // iterate through string and add the current result to the end of each char
    let result = ""
    for (let i of str){
        result = i + result
    }
    return result
}

module.exports = reverse;
