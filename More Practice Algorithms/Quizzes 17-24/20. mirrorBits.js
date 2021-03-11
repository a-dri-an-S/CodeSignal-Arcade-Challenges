// 20. Reverse the order of the bits in a given integer.

// num -> binary, broken into single character inside array -> reverse array and join string -> convert string to binary number and - > convert binary to integer
const mirrorBits = a => parseInt((a.toString(2)).match(/.{1,1}/g).reverse().join(""), 2);
