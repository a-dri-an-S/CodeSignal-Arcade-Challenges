// 57. Your task is to check by given string inputString whether it corresponds to MAC-48 address or not.

function isMAC48Address(inputString) {
    let hex = new RegExp(/^([\dA-F]{2}-){5}([\dA-F]{2})$/);
    return hex.test(inputString);
}