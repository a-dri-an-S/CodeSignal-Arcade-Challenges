function longestDigitsPrefix(inputString) {
    // string spread inside an array
    let str = [...inputString];
    // array for prefix
    let prefix = [];
    // iterates through loop
    for(let i = 0; i < str.length; i++){
        // if not number, break
        if (('0'<=str[i] && str[i]<='9') !== true){
            break;
        }
        // push numbers into prefix array
        prefix.push(str[i]);
    }
    // returns digit prefix as string
    return prefix.join("");
    
}