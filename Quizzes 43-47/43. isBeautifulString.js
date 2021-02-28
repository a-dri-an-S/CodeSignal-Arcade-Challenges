// 43. A string is said to be beautiful if each letter in the string appears at most as many times as the previous letter in the alphabet within the string; ie: b occurs no more times than a; c occurs no more times than b; etc. Note that letter a has no previous letter. Given a string, check whether it is beautiful.

function isBeautifulString(inputString) {
    // array to holds letters in alpahbetical order
    const alphabet = [];
    // loop to create alphabet
    for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
        alphabet.push(String.fromCharCode(i));
    }
    // array contains the amount of occurances of each letter
    const letters = Array(alphabet.length).fill(0);
    // loop poppulates occurrences in letter arry
    for (let letter of inputString) {
        letters[alphabet.indexOf(letter)]++;
    }
    // checks if the previous letter occures less than the current
    for (let i = 0; i < letters.length; i++) {
        if (letters[i + 1] > letters[i]) return false;
    }
    return true;
}