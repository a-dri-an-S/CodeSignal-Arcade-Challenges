// 37. Reversing an array can be a tough task, especially for a novice programmer. Mary just started coding, so she would like to start with something basic at first. Instead of reversing the array entirely, she wants to swap just its first and last elements.

// Given an array arr, swap its first and last elements and return the resulting array.

function firstReverseTry(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(i === 0){
            newArr.push(arr[arr.length - 1]);
        } else if(i === (arr.length - 1)){
            newArr.push(arr[0])
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr;
    
}
