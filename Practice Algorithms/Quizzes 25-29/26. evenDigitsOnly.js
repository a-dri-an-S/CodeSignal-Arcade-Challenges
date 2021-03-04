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