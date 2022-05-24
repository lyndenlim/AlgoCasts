function divide(dividend, divisor) {
    // if quotient is bigger than 2^31 -1 and smaller than -2^31, return respective numbers
    // divide dividend by divisor and round down

    let quotient = dividend/divisor
    if (quotient > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1
    } else if (quotient < -Math.pow(2, 31)) {
        return -Math.pow(2, 31)
    } else {
        if (quotient < 0) {
            return Math.ceil(quotient)
        } else {
            return Math.floor(quotient)
        }
    }
}
divide(7, -3)