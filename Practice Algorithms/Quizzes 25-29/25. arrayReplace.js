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


