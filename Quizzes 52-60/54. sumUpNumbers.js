// 54. CodeMaster has just returned from shopping. He scanned the check of the items he bought and gave the resulting string to Ratiorg to figure out the total number of purchased items. Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers which appear in the given input. Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.

function sumUpNumbers(inputString) {
    // creates array of numbers, by matching regex or creates empty array
    let costs = inputString.match(/[0-9]+/ig) || [];
    // if only one series of numbers, return number
    if (costs.length === 1) return parseInt(costs);
    // if more than one series of numbers, return sum
    if (costs.length  > 1) return costs.reduce((a,b) => parseInt(a) + parseInt(b));
    // if no numbers, return 0
    return 0;
}