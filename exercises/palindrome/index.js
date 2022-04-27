// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // reverse str
    // compare with original
    //if match return true, otherwise false
    let reverseStr = "" 
    for (let i of str) {
        reverseStr = i + reverseStr
    }

    if (str === reverseStr) {
        return true
    } else {
        return false
    }
}

module.exports = palindrome;
