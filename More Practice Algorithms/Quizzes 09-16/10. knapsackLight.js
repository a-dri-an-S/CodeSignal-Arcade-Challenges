// 10. You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?

function knapsackLight(v1, w1, v2, w2, maxW) {
    // if both weights are less than max, return both values
    if((w1 + w2) <= maxW) return v1 + v2;
    // if both weights are greater than maxW return no value, 0
    if(w1 > maxW && w2 > maxW) return 0;
    // if w2 is greater than maxW, return v1, else return greater values of the two
    return w2 > maxW ? v1 : Math.max(v1, v2);
}