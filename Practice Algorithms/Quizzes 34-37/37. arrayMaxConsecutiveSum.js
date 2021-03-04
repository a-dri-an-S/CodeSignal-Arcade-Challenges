// 37. Given array of integers, find the maximal possible sum of some of its k consecutive elements.

function arrayMaxConsecutiveSum(inputArray, k) {
    let sum = 0
    let max = 0
    
    for (let i = 0; i < k; i++) {
        sum += inputArray[i]
        if (sum > max) max = sum
    }
    
    for (let j = k; j < inputArray.length; j++) {
        sum += inputArray[j]
        sum -= inputArray[j - k]
        if (sum > max) max = sum
    }
    return max
}