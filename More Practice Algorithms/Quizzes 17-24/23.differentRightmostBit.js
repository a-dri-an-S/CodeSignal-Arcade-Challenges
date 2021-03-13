let n = 11;
let m = 13;

let binary1 = n.toString(2);
let binary2 = m.toString(2);

let arr1 = binary1.match(/.{1,1}/g).reverse();
let arr2 = binary2.match(/.{1,1}/g).reverse();

console.log(binary1);
console.log(binary2);

console.log(arr1);
console.log(arr2);

