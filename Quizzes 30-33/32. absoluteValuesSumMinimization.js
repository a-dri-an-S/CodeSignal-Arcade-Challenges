// 33. Given a sorted array of integers a, your task is to determine which element of a is closest to all other values of a. In other words, find the element x in a, which minimizes the following sum:

function absoluteValuesSumMinimization(a) {
    // res array contains results (sums)
    const res = [];
    // forEach loop iterates through subtracts elements (following guidelines) and sums the differences, which get pushed into res array
    a.forEach(num => {
        const sum = a.reduce((accum, next) => {
            return accum + Math.abs(next - num);
        }, 0);
        res.push(sum);
    });
    // finds the lowest sum and returns the index
    const lowest = Math.min(...res);
    return a[res.indexOf(lowest)];
};