// 14. Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on. You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

function alternatingSums(a) {
    // empty arrays to split initial array
    let arr1 = [];
    let arr2 = [];
    // loop through array, pushing alternating #s into separate arrays
    for (let i = 0; i < a.length; i++){
        if (i % 2 === 0){
            arr1.push(a[i]);
        } else {
            arr2.push(a[i])
        }
    } 
    // sums each array individually and placed into array
    return [arr1.reduce((t, c) => t + c, 0), arr2.reduce((t, c) => t + c, 0)];
}
