// applied on all elements

const nums = [1,2,3,4,5,6,7,8,9]
const newNums1 = nums.map( (item) => (item>6) )
console.log(newNums1);
const newNums2 = nums.map( (item) => {return item+3} )
console.log(newNums2);

nums.forEach(element => {
    console.log(element+3);
});

