// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    // initialize empty hash for letter count
    // store count of letter within hash
    // look for max value in hash 
    // return the key with the max value
    let letterCount = {}
    for (let char of str) {
        if (letterCount[char]) {
            letterCount[char] += 1
        } else {
            letterCount[char] = 1
        }
    }
    const indexOfMaxChar = Object.values(letterCount).indexOf(Math.max(...Object.values(letterCount)))
    return Object.keys(letterCount)[indexOfMaxChar]
}

maxChar("abcccccccd")

module.exports = maxChar;
