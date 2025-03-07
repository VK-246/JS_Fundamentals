//Objects that store a collection of multiple items
//  resizable | Mix types allowed | 0-indexed | shallow copy(by REFERENCE)
const arr = [1,2,3,4,5]
// console.log(arr['1']);
// console.log(arr[1]);
// console.log(arr['01']);

// To check available functions of arrays -> 
// 1. Go to inspect->console
// 2. declare array and check

// arr.push(6)
// arr.push(7)
// console.log(arr)

// arr.shift();
// console.log(arr);
// // all elements right shifted
// arr.unshift(1);
// console.log(arr);

// 
console.log(arr.length);

const myArr = [1,2,3,4,5]
//  observe return type to handle values
// console.log(arr.includes(6));
// console.log(arr.indexOf(6));

// const Newarr = arr.join()
// console.log(typeof Newarr);

// slice and splice
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);