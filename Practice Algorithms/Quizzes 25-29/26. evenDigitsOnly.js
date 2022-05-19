// 26. Check if all digits of the given integer are even.

function evenDigitsOnly(n) {
    // convert integer to string & split into single digits
    let arr = n.toString().split('');
    // map through array and check for odd #'s & creates a array full of booleans
    // if false is included, returns false, else returns true
    if (arr.map((i) => i % 2 === 0).includes(false)){
        return false
    }
    return true
}

// TWO POINTER SOLUTION
function solution(n) {
    n = n.toString();
    let j = n.length - 1;
    
    for (let i = 0; i < n.length; i++) {
        if (n[i] % 2 !== 0) return false;
        if (n[j] % 2 !== 0) return false;
        j--;
        if (i === j) break;
    }
    
    return true
}

// 1. Set n equal to n converted to string
// - Use toString() method to convert integer to string
// 2. Declare j and set it to length of n - 1
//  - Subtract 1 because for 0-indexed array
// 3. Use a for loop to iterate through n string
// 4. If char at index-1 divided by 2 has a remainder of 0, return false
//  - Use the modulo operator to check for remainder
// 5. If char at index-j divided by 2 has a remainder of 0, return false
//  - Use the modulo operator to check for remainder
// 6. Decrement j by 1
// 7. If i IS EQUAL TO j, break loop
// 8. If no conditions are met and loop ends/breaks, return true