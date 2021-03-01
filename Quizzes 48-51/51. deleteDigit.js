// 51. Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

function deleteDigit(n) {
    // turns number to string
    n = n.toString();
    // stores largest sum
    let largestNum = 0;
    for(let i = 0; i < n.length; i++){
        // declares string and initially gives it value of n[0].
        let string;
        if(i == 0){
            string = n.substring(1,n.length);
        } else {
            // concatenates two characters next to each other, removing 
            string = n.substring(0,i)+n.substring(i+1);
        }
        // if converted string (number) is larger than largestNum, it becomes the new largestSum 
        if(parseInt(string)>largestNum){
            largestNum = parseInt(string);
        }
    }
    // returns largest number
    return largestNum;
}