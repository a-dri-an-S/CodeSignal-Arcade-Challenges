// 19. You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers from a to b inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.

function rangeBitCount(a, b) {
    // empty array
    let arr = [];
    // for loop to populate empty array with range of numbers a through b;
    for (let i = a; i <=b; i++) arr.push(i);
    // iterate through array, convert to binary and reduce/concat to a single string
    let binary = arr.map(i => i.toString(2)).reduce((a, b) => a + b);
    // convert string to array of single characters 
    let concat = binary.match(/.{1,1}/g);
    // reduce string and sum numbers (add all 1s)
    return concat.reduce((a, b) => +a + +b);
}
