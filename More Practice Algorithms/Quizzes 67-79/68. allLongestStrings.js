// 68. Given an array of strings, return another array containing all of its longest strings.

function allLongestStrings(arr) {
    let longest = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > longest){
            longest = arr[i].length;
        }
    }
    return arr.filter(i => i.length === longest);
}
