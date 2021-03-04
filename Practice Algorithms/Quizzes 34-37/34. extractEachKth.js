// 34. Given array of integers, remove each kth element from it.

function extractEachKth(inputArray, k) {
    // newArr to push into
    let newArr = [];
    // iterates through array
    for(let i = 0; i < inputArray.length; i++){
        // checks if #'s are divisible by K with remiander 0, kth degree
        if ((i + 1) % k !== 0){
            // pushes #'s that aren't at specified indexes
            newArr.push(inputArray[i]);
        }
    }
    // returns new array
    return newArr;
}