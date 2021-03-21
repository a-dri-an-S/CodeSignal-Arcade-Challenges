// 54. Given a string, check if it can become a palindrome through a case change of some (possibly, none) letters.

function isCaseInsensitivePalindrome(str) {
    let word = str.toLowerCase();
    let newWord = word.split("").reverse().join("");
    return word === newWord;
}

const isCaseInsensitivePalindrome = str => str.toLowerCase() === [...str].reverse().join("").toLowerCase();