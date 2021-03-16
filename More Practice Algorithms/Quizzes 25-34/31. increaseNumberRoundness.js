// 31. Define an integer's roundness as the number of trailing zeroes in it.
// Given an integer n, check if it's possible to increase n's roundness by swapping some pair of its digits.

function increaseNumberRoundness(n) {
    let numArr = Array.from(String(n)); 
    let num = 0;
    for(let i = numArr.length - 1; i >=0; i--){
        if (num < 1){
            if (numArr[i] !== "0") num++;
        } else if (num === 1){
            if(numArr[i] === "0") return true;
        }
    }
    return false;
}