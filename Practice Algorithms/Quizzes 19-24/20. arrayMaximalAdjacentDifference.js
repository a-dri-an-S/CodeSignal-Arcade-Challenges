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

// two pointers solution
function solution(inputArray) {
    let max = 0;
    let j = inputArray.length - 1
    
    for (let i = 0; i < inputArray.length; i++) {
        max = Math.max(max, Math.abs(inputArray[i] - inputArray[i + 1]));
        max = Math.max(max, Math.abs(inputArray[j - 1] - inputArray[j]));
        if (j === i) {
            break;
        }
        
    }
    
    return max;
}

// 1. Declare max and set it to 0;
// 2. Declare j and set it to last index of inputArray
//  - Use length to get element count of array and subtract by 1 to get last index (0-indexed)
// 3. Use a for loop to iterate through inputArray
// 4. Set max equal to largest number between max and the absolute value between element at index-i subtracted by element at index-i + 1
// - Use Math.max() function to get the largest value between those two values
// - Use Math.abs() to get the absolute value of a number, in this case absolute value between the difference of two numbers
// 5. Set max equal to largest number between max and the absolute value between element at index-j subtracted by element at index-j - 1
// - Use Math.max() function to get the largest value between those two values
// - Use Math.abs() to get the absolute value of a number, in this case absolute value between the difference of two numbers
// 6. If j IS EQUAL TO i, break loop
// 7. When loop ends, return max