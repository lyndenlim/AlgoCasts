// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let matches = str.match(/[aeiou]/gi)
    return matches ? matches.length : 0 
}

vowels("Hello there")

module.exports = vowels;

    // initialize a hash map
    // store the letter counts in map
    // check if there are any vowels in the map (account for uppercase letters)
    // if there are return the count of all vowels
    // let letterCount = {};
    // for (let i of str) {
    //     if (letterCount[i]) {
    //         letterCount[i] += 1
    //     } else {
    //         letterCount[i] = 1
    //     }
    // }

    // let vowelCount = 0
    // for (let i in letterCount) {
    //     if (i.match(/[aeiou]/gi)) {
    //        vowelCount += letterCount[i]
    //     }
    // }
    // return vowelCount
