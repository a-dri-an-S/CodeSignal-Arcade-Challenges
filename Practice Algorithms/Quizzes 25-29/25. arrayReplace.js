// 25. Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    // new Array
    let newArr = [];
    // iterate through given array
    for (let i = 0; i < inputArray.length; i++){
        // if not elemToReplace push element to newArr, else push substitutionElem to replace
        if (inputArray[i] !== elemToReplace){
            newArr.push(inputArray[i])
        } else {
            newArr.push(substitutionElem)
        }
    }
    return newArr;
}

// SPLICE SOLUTION
function solution(arr, replace, sub) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === replace) {
            arr.splice(i, 1, sub);
        }
    }
    return arr;
}
// 1. Use a for loop to iterate through arr array
// 2. If current element at index-i IS EQUALS TO replace, remove element and replace with sub
// - Use splice() method to remove element at index-i and replace with sub
// 3. When loop ends, return arr

