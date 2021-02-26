// 12. Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees

function sortByHeight(a) {
    let sortedArr = [];
    let arr = [];
    // iterates from array and separates trees and people into their own arrays
    for (let i = 0; i < a.length; i++) {
        if (a[i] === -1) {
            arr.push(i);
        } else {
            sortedArr.push(a[i]);
        }
    }
    // sorts people from shortest to tallest
    let sorted = sortedArr.sort((pre, cur) => pre - cur);
    // splices trees back in the original order
    for (let j = 0; j < arr.length; j++) {
        sorted.splice(arr[j],0,-1);
    }
    return sorted;
}