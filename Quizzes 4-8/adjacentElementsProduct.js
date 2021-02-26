// 4. Given an array of integers, find the pair of adjacent elements that has the largest product and return that product

function adjacentElementsProduct(inputArray) {
    // z = -Infinity (lowest possible number)
    let z = -Infinity;
    // loop through array
    for(let i = 0; i < inputArray.length; i++){
        x = inputArray[i];
        y = inputArray[i + 1];
    // if x * y is greater than z, that becomes the new set of consecutive #'s    
        if (x  * y > z){
            z = x * y;
            };
    };
    // returns largest product of consecutive #'s
    return z;
}