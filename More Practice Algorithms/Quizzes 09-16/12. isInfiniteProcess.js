// 12. Given integers a and b, determine whether the following pseudocode results in an infinite loop

function isInfiniteProcess(a, b) {
     // if a <=b & sum of a + b is even, a & b are or will be equal to each other, returns false, else it is an infinite process and will return an infinite loop making it true
    return (a <= b && (b - a) % 2 === 0) ? false : true; 
}