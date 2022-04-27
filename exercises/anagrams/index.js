// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    // create empty hash map to store letter count of each string
    // compare the lengths and the values of each key against each other 
    // return true if lengths and values match, otherwise false

    const letterCountA = {}
    const letterCountB = {}

    for (let char of stringA.replace(/[^\w]/g, "").toLowerCase()) {
        if (letterCountA[char]) {
            letterCountA[char] += 1
        } else {
            letterCountA[char] = 1
        }
    }
    for (let char of stringB.replace(/[^\w]/g, "").toLowerCase()) {
        if (letterCountB[char]) {
            letterCountB[char] += 1
        } else {
            letterCountB[char] = 1
        }
    }

    if (Object.keys(letterCountA).length !== Object.keys(letterCountB).length) {
        return false
    }

    for (char in letterCountA) {
        if (letterCountA[char] !== letterCountB[char]) {
            return false
        }
    }

    return true
}

module.exports = anagrams;
