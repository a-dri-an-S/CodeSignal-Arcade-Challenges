// 27. Correct variable names consist only of English letters, digits and underscores and they can't start with a digit. Check if the given string is a correct variable name.

function variableName(name) {
    // Regex expression contains all allowed characters
    // test method is used to check whether characters are contained within string, returns either true or false
    return /^[a-z_]\w*$/i.test(name);
}