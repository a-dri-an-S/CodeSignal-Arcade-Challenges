// 58. You are taking part in an Escape Room challenge designed specifically for programmers. In your efforts to find a clue, you've found a binary code written on the wall behind a vase, and realized that it must be an encrypted message. After some thought, your first guess is that each consecutive 8 bits of the code stand for the character with the corresponding extended ASCII code. Assuming that your hunch is correct, decode the message.

function messageFromBinaryCode(code) {
    let binary = code.match(/.{1,8}/g);
    let string = [];
    for(let i = 0; i < binary.length; i++){
        let hex = parseInt(binary[i], 2);
        string.push(String.fromCharCode(hex));
    }
    return string.join("");
    
}

function messageFromBinaryCode(code) {
    // takes binary string and breaks it up into array at 8 element intervals, using regex to match pattern
    let binary = code.match(/.{1,8}/g);
    // creates new array from binary and creates string from ASCII code and joins back to string. 
    return binary.map(i => String.fromCharCode(parseInt(i, 2))).join("")

}