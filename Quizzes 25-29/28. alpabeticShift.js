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