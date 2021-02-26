// 10. Given two strings, find the number of common characters between them.

function commonCharacterCount(s1, s2) {
    // split strings into arrays
    let str1 = s1.split("");
    let str2 = s2.split("");
    // count for amount of common characters
    let commonChar = 0;
    // loop through str1 to, check for common character, delete charcter from str2 to not count again
    for (let i = 0; i < str1.length; i++){
        if ( str2.includes(str1[i])){
            commonChar++;
            str2.splice(str2.indexOf(str1[i]), 1);
        }
    }
    return commonChar;
}
