// 69. Check whether the given string is a subsequence of the plaintext alphabet.

const alphabetSubsequence = s => s === [...new Set(s)].sort().join(``);