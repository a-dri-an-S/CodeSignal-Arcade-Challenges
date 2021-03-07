// 13. Consider an arithmetic expression of the form a#b=c. Check whether it is possible to replace # with one of the four signs: +, -, * or / to obtain a correct expression.

function arithmeticExpression(a, b, c) {
    // checks if any of the arithmetic expressions containing (+ - * /) are true, else returns false
    return a+b === c ? true : 
        a-b === c ? true : 
        a*b === c ? true :
        a/b === c ? true : false; 
}

// filters out the arithmetic expressions that do satisfy solution c and checks length of array, if one or more expressions are present, it returns true, else false 
const arithmeticExpression = (a, b, c) => [..."+-*/"].filter((i) => eval(`${a}${i}${b}`) === c ).length >= 1; 
