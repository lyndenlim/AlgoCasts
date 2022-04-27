// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    const result = [0, 1];
    for (let i = 2; i <= n; i++) {
        let current = result[i - 1]
        let previous = result[i - 2]

        result.push(current + previous)
    }
    return result[n]

}

fib(4)

module.exports = fib;

// if (n === 0) {
//     return 0
// } else if (n === 1) {
//     return 1
// }

// let current = 1;
// let previous = 0;
// let sum = -1;
// while (n >= 2) {
//     sum = current + previous
//     previous = current
//     current = sum
//     n -= 1
// }
// return sum