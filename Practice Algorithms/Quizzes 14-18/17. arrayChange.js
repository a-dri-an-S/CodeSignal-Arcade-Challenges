// 17. You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

function arrayChange(inputArray) {
    let moves = 0;
    for (let i = 0; i + 1 < inputArray.length; i++){
        if (inputArray[i] - inputArray[i + 1] >= 0)
            if(inputArray[i] - inputArray[i + 1] === 0){
                moves++;
                inputArray[i + 1]++;
            } else {
                moves += inputArray[i] - inputArray[i + 1] + 1;
                inputArray[i + 1] += inputArray[i] - inputArray[i + 1] + 1;
            }
    }
    return moves;
}

// Using splice
function solution(arr) {
    let count = 0;
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            const el = (arr[i] - arr[i + 1]) + 1;
            arr.splice(i + 1, 1, arr[i + 1] + el);
            count += el;
        } else if (arr[i] === arr[i + 1]) {
            arr.splice(i + 1, 1, arr[i + 1] + 1);
            count++;
        }
    }
    return count;
}

// SPLICE EXPLANATION
// 1. Declare count and set it to 0
// 2. Use a for loop to iterate through arr array until 2nd to last element is reached
// 3. If current element at index-1 is greater than element at index-i+1, perform the following:
//  - Declare el and set it to the difference between both elements at index-i & index-i+1 + 1 (moves it takes to increment by 1)
//  - Use the splice() method to remove element at index-i+1 and insert new incremented element
//  - Set count to el
// 4. Else if, current element at index-1 IS EQUAL TO element at index-i+1, perform the following:
//  - Use the splice() method to remove element at index-i+1 and replace it with element at said index, incremented by 1
//  - Increment count by 1
// 5. When loop ends, return count