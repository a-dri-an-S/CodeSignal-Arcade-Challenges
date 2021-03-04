// 21. Given a string, find out if it satisfies the IPv4 address naming rules.

function isIPv4Address(str) {
    // split string into array at the '.'
    let arr = str.split(".");
    // checks if array is 4 elements long, proper address length
    if (arr.length !== 4) return false;
    // iterate through loop
    for (let i = 0; i < arr.length; i++) {
        // checks for srtrings OR non integers
        if (arr[i] === "" || isNaN(+arr[i])) return false;
        // checks for leading 0's
        if(arr[i].length !== ('' + +arr[i]).length) return false;
        // checks if integers are less than 0 or greater than 255, 8-bit integer or -number
        if (+arr[i] < 0 || +arr[i] > 255) return false;
    }
    return true;
}