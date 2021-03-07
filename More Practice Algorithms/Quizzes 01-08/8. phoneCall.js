// 8. Some phone usage rate may be described as follows:

    // first minute of a call costs min1 cents,
    // each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
    // each minute after 10th costs min11 cents.

// You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?

function phoneCall(min1, min2_10, min11, s) {
    // first min + mins 2 - 10 sum
    let first10Mins = min1 + (min2_10 * 9);
    // first minute is equal to amount of cents, return 1 min
    if(min1 === s) return 1;
    // first minute is greater than cents, return 0 mins
    if(min1 > s) return 0;
    // if not enough for ten minutes, return first minute + remainder of minutes / rate, rounded down 
    if(s < (first10Mins)) return Math.floor(1 + ((s - min1) / min2_10));
    // 10 mins + remaining cents divided by rate
    return Math.floor(((s - first10Mins) / min11)) + 10;
}
