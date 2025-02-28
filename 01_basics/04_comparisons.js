// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0); // convert null to 0 and compare
console.log(null == 0); //rule of equality for null :if both null return true else false
console.log(null >= 0); // convert null to 0 and compare
// bad practice of writing code even if the code passes
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === : strict comparison
console.log("2" == 2); // returns true
console.log("2" === 2); // returns false 