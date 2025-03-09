const nums = [1,2,3]

// const newNums = nums.reduce(function (acc,currval) { 
//      console.log(`acc: ${acc} and curr: ${currval}`),
//      return acc*currval
// },1)
// console.log(newNums);

// const newNums = nums.reduce( (acc,currval) => acc*currval,1)
// console.log(newNums);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

const ShoppingCart = [
    {
        ItemName: "JS course",
        price: 1999
    },
    {
        ItemName: "Py course",
        price: 599
    },
    {
        ItemName: "Android course",
        price: 3999
    },
    {
        ItemName: "ML course",
        price: 3
    },
]

const cost = ShoppingCart.reduce( (acc,curr) => (acc+curr.price),0 )
console.log(cost);
