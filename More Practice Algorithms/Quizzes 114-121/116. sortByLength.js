// 116. Given an array of strings, sort them in the order of increasing lengths. If two strings have the same length, their relative order must be the same as in the initial array.

const sortByLength = inputArray => inputArray.sort((a, b) => a.length - b.length);


