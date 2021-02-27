// 20. Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

function arrayMaximalAdjacentDifference(inputArray) {
    // array to push differences to
    let newArr = [];
    // iterate through array, and push difference of i - i+1 and stops before last number, no number to delete afterwards
    for (let i = 0; i < inputArray.length - 1; i++) {
        let difference = inputArray[i] - inputArray[i + 1];
        newArr.push(Math.abs(difference));
    }
    // returns max (largest) number in array using spread operator
    return Math.max(...newArr);
}