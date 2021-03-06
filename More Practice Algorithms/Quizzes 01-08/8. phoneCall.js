// 8. Some phone usage rate may be described as follows:

    // first minute of a call costs min1 cents,
    // each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
    // each minute after 10th costs min11 cents.

// You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?

function phoneCall(min1, min2_10, min11, s) {
    let first10Mins = min1 + (min2_10 * 9);
    if(min1 === s) return 1;
    if(min1 > s) return 0;z
    if(s < (first10Mins)) return Math.floor(1 + ((s - min1) / min2_10));
    return Math.floor(((s - first10Mins) / min11)) + 10;
}
