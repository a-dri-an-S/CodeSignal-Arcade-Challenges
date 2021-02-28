// 36. Given a string, find the number of different characters in it.

function differentSymbolsNaive(s) {
    // new Set()returns only unique characters, spread out through the array and returned its length
    return [...new Set(s)].length;
}