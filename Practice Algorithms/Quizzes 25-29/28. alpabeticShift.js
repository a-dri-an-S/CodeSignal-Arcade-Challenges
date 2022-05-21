// 28. Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).

function alphabeticShift(inputString) {
    // places string into array and separates characters in string with spread operator
    return [...inputString]
    // maps through array and creates new array with characters shifted up by 1
    // uses character code that was shifted by 1 and converts it into "string"
    .map(i => (String.fromCharCode((i.charCodeAt() + 1))))
    // joins back into string
    .join("")
    // replaces "{" with "a", "{" is 1 up from "z"
    .replace(/{/g, 'a');
}

// 2nd solution

function solution(str) {
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "z") {
            str = str.substring(0, i) + "a" + str.substring(i + 1);
        } else {
            str = str.substring(0, i) + String.fromCharCode(str[i].charCodeAt() + 1) + str.substring(i + 1);
        }
    }
    
    return str;
}

// 1. Use a for loop to iterate through str
// 2. If element at index-i IS EQUAL TO "z", set str equal to a str with "z" replaced with "a"
//  - Use substring() function to get a string from index-0 to i
//  - Use substring() function to get a string from index-i+1 to end of string
//  - Add first sub string and second sub string, with a in the middle
// 3. Else set str equal to str with char at index-i moved up 1 letter in the alphabet
//  - Use substring() function to get a string from index-0 to i
//  - Get char from character code and increment that character code by 1
//      - Use fromCharCode() function to get a char from character code
//      - Use charCodeAt() to get character code of char at index-i and increment by 1
//  - Use substring() function to get a string from index-i+1 to end of string
//  - Add all 3 strings together in order above to get new str
// 4. When loop ends, return str

