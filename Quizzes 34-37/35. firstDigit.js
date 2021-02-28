// 35. Find the leftmost digit that occurs in a given string.

function firstDigit(inputString) {
    // checks for digit (regex) with match method and returns 1st digit
    return inputString.match(/\d/)[0]
}