// 21. Presented with the integer n, find the 0-based position of the second rightmost zero bit in its binary representation (it is guaranteed that such a bit exists), counting from right to left.

// Return the value of 2position_of_the_found_bit.

// function secondRightmostZeroBit(n) {
//     console.log((n.toString(2)).match(/.{1,1}/g).reverse());
// }


function secondRightmostZeroBit(n) {
    return (function(input) {    
        let result = 0;
        let zeroFound = false;
        
        for (let i = 0; i < 32; i++) {
        if (!((input >> i) & 1)) {
            if (zeroFound) {
            result = i;
            break;
            }
            
            zeroFound = true;
        }
        }
        
        return Math.pow(2, result);
    })(n) ;
}

