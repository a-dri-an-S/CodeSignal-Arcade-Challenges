// 17. You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

function arrayChange(inputArray) {
    let moves = 0;
    for (let i = 0; i + 1 < inputArray.length; i++){
        if (inputArray[i] - inputArray[i + 1] >= 0)
            if(inputArray[i] - inputArray[i + 1] === 0){
                moves++;
                inputArray[i + 1]++;
            } else {
                moves += inputArray[i] - inputArray[i + 1] + 1;
                inputArray[i + 1] += inputArray[i] - inputArray[i + 1] + 1;
            }
    }
    return moves;
}