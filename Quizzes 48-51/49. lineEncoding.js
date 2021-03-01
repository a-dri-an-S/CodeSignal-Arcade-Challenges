// 49. Given a string, return its encoding defined as follows:

// First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
    // - for example, "aabbbc" is divided into ["aa", "bbb", "c"]
// Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
    // - for example, substring "bbb" is replaced by "3b"
// Finally, all the new strings are concatenated together in the same order and a new string is returned.

function lineEncoding(s) {
    var arr = s.split(''),
    prev = '',
    ctr = 0,
    res = '';


    mini = (n, c) => {
        if (n > 1) return n + c;
        else return c;
}

    for (c of arr) {
        if (c == prev) ctr++;
        else {
        if (ctr != 0)
            res += mini(ctr, prev);
        prev = c;
        ctr = 1;
        }
}

    res += mini(ctr, prev);

    return res;
}
