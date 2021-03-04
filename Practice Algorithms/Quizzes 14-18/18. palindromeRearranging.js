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