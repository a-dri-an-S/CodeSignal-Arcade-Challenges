// 26. Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.

function countSumOfTwoRepresentations2(n, l, r) {
    var count = 0;
    
    for (var i = l; i <= r; i++)
        if (i <= (n - i) && (n - i) <= r)
            count++;
    
    return count;
}