// 53. Determine whether the given string can be obtained by one concatenation of some string to itself.

function inTandemRepeat(str) {
    let mid = str.length / 2;
    return str.slice(0, mid) == str.slice(mid);
}
