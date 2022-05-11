// 18. Given a string, find out if its characters can be rearranged to form a palindrome.

function palindromeRearranging(str) {
    let letterCounts = {};
    let palindromeSum = 0;
    for (let i = 0; i < str.length; i++) {
        letterCounts[str[i]] = letterCounts[str[i]] || 0;
        letterCounts[str[i]]++;
    }
    for (let letterCount in letterCounts) {
        palindromeSum += letterCounts[letterCount] % 2;
    }

    return palindromeSum < 2;
}

// Using Map object
function solution(str) {
    let hash = new Map();
    let odd = 0
    
    for (const char of str) {
        if (hash.get(char) === undefined) {
            hash.set(char, 1)
        } else {
            hash.set(char, hash.get(char) + 1)
        }
    }
    for (const arr of hash) {
        if (arr[1] % 2 !== 0) {
            odd++;
        }
        if (odd > 1) {
            return false;
        }
    }
    
    return true;
}

// 1. Declare hash and set it to an empty Map object
// 2. Let odd equal to 0
// 3. Use a for loop to iterate through str
// 4. If hash doesn't include current char (is undefined), add key/value pair of char and 1 to hash
//  - Use get() method to check if hash has current char
//  - Use set() method to add key/value pair to hash
// 5. Else, Add key/value pair with value incremented by 1
//  - Use set() method to add key/value pair
//  - Use get() method to get value of char and increment by 1
// 6. Use a separate for loop to iterate through hash map
// 7. If value of current key/value pair is not divisible by 2 (modulo return a remainder), increment odd by 1
// 8. If odd is greater than 1, return false
// 9. If no conditions are met, return true