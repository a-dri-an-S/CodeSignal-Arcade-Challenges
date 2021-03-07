// 11. You're given three integers, a, b and c. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?

function extraNumber(a, b, c) {
    // a = b, return c
    if(a === b) return c;
    // b = c, return a
    if(b === c) return a;
    // a = c, return b
    return b
}

// same as above with ternary statements
const extraNumber = (a,b,c) => (a === b) ? c : (c === b) ? a : b;