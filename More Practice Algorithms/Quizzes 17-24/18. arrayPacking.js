// 18. You are given an array of up to four non-negative integers, each less than 256.

// Your task is to pack these integers into one number M in the following way:

// The first element of the array occupies the first 8 bits of M;
// The second element occupies next 8 bits, and so on.

// Return the obtained integer M.

function arrayPacking(a) {
    // iterate through array and convert integers to binary
    let binaryArr = a.map(i => ("00000000" + i.toString(2)).slice(-8));
    // reverses binary numbers in array
    let binarySort = binaryArr.reverse();
    // reduces binary number to a single string
    let binaryConcat = binarySort.reduce((a, b) => a + b);
    // returns binary number converted integer
    return parseInt(binaryConcat, 2);
}