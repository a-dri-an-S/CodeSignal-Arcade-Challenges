// 11. Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half. Given a ticket number n, determine if it's lucky or not.

function isLucky(n) {
    // find the have of a number if interpreted as a string
    let half = n.toString().length / 2;
    // split number into separate characters as strings, then convert srings to numbers
    let numArr = ("" + n).split("").map(num => +num);
    // splices 1st half of array + sum & sums other half of array and checks whether true or flase
    return numArr.splice(0, half).reduce((total, num) => total + num, 0) === numArr.reduce((total, num) => total + num, 0);
}