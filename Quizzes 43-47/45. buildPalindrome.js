// 45.Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

function buildPalindrome(st) {
    //checks if given string is a palindrome
    if (st === st.split('').reverse().join('') ) return st;
    for (let i = 0; i < st.length; i++) {
        let newStr = st;
        for (let j = i; j >= 0; j--) {
        newStr += st[j]
        let reversed = newStr.split('').reverse().join('')
        if (newStr === reversed) return newStr
        }
    }
}
