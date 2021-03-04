// 41. Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number. Given an integer, find its digit degree.

function digitDegree(n) {
    // tracks count of sums of digits
    let count = 0;
    // if already a single digit, return count
    if (n <= 9) return count;
        else {
        // if false, splits number, sums both numbers and if a single digit, breaks and returns count, if false, continues until its sum is a single number
        while (true){
            count++;
            n = n.toString().split("").reduce((a, b) => parseInt(a) + parseInt(b));
            if (n <= 9) break; 
        }
    }
    return count;
}
