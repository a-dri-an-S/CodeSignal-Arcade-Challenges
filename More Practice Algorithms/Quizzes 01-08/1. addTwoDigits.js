// 1.  You are given a two-digit integer n. Return the sum of its digits.

function addTwoDigits(n) {
    // takes integer, converts to string and breaks into array
    let numArr = n.toString().match(/.{1,1}/g);
    // adds digits together, returns sum
    return numArr.reduce((a,b) => +(a) + +(b));
}