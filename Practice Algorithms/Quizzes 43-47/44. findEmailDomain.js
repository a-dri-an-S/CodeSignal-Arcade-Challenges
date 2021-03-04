// 44. Given a valid email address, find its domain part.

function findEmailDomain(address) {
    // turns string into array
    let arr = [...address];
    // contains domain portion of email
    let domain = [];
    // Iterate through array checking if the current element is @
    // If current item is @, slice everything after the @
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].charCodeAt(0) === 64) {
            domain = arr.slice(i + 1);
        }
    }
    // Turn array containing domain info back into a string
    return domain.join('');
}