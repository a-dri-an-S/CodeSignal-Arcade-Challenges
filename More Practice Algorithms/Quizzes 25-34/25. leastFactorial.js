function leastFactorial(n) {
    let num = 1;
    for(let i = 1; i < n; i++){
        num *= i;
        if (n <= num){
            break;  
        } 
    }
    return num;
}
