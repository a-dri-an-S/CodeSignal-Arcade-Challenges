// 44. Given a valid email address, find its domain part.

function findEmailDomain(address) {
    let arr = [...address];
    let domain = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].charCodeAt(0) === 64) {
            domain = arr.slice(i + 1);
        }
    }
    return domain.join('');
}