// 51. Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

function longestWord(text) {
    // splits string into substrings into an array
    let res = text.match(/([a-z]+)/ig);
    // holds longest word
    let max = "";
    // loops through array amd checks if current string is longer than the longest string
    for(let i=0;i<res.length;i++)
        if(res[i].length>max.length)
    // sets longest string
            max = res[i];
    // returns longest string 
    return max;
}