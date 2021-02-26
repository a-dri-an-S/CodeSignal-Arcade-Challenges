// 3. Given the string, check if it is a palindrome. 

function checkPalindrome(inputString) {
    // split, reverse & join string
    let reversedStr = inputString.split("").reverse().join("");
    // check if reversed string is exact copy of inputString
    return (inputString === reversedStr) ? true : false;
}