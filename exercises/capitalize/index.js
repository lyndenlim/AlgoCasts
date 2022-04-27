// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    // Split string by space
    // Map through each element and replace the first letter with cap. then concat with the rest of the string
    const splitStr = str.split(" ")
    return splitStr.map(word => word.slice(0,1).toUpperCase() + word.slice(1, word.length)).join(" ")
}

module.exports = capitalize;
