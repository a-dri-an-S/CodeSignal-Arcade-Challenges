// 13. Write a function that reverses characters in (possibly nested) parentheses in the input string. Input strings will always be well-formed with matching ()s.

function reverseInParentheses(s) {
    if (s.includes('(')){
        return reverseInParentheses(reverseOnce(s));
    } else {     
        return s;
    }
}

function reverseOnce(s){
    let regexp = /\(([^()]*)\)/i;
    let subStr = regexp.exec(s)[1];
    subStr = subStr.split('').reverse().join('');
    return s.replace(regexp, subStr)
}
