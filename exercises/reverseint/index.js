// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // cast n to string
    // reverse string
    // call math.sign and cast back to number with sign
    const numAsStr = n.toString()
    let result = ""
    for (let i of numAsStr){
        result = i + result
    }
    return Math.sign(n) * parseInt(result)

}

module.exports = reverseInt;
