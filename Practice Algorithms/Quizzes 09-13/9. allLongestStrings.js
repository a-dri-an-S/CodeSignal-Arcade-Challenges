// 9. Given an array of strings, return another array containing all of its longest strings.

function allLongestStrings(inputArray) {
    let maxStrLength = 0;
    // loop through array to find the longest string length
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i].length >= maxStrLength){
            maxStrLength = inputArray[i].length;
        }
    }
    // filter out longest strings into new array
    return inputArray.filter(str => str.length === maxStrLength);
}
