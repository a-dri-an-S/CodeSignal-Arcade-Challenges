// 7. Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

function almostIncreasingSequence(sequence) {
    let count = 0;
    
    for(let i = 0; i < sequence.length; i++){
        // if the element that precedes the next element is greater, increment count by 1
        if(sequence[i] <= sequence[i - 1]){
            count++
            
            if(sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]){
                count++;
            }
        }
    }
    return count <= 1;
}
