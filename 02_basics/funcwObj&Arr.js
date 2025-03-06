//1. Handling list of items with functions

//Real-Use case Project shopping cart

// Cart price function
// function calculateCartPrice(num1){
//     let total = 0;
//     for(i in num1){
//         total += num1[i];
//     }
// }
// console.log(calculateCartPrice(399));
// console.log(calculateCartPrice(122,342,553,399)); //Prints first value only


// Looping on input
// function calculateCartPrice2(num1){
//     let total = 0;
//     for(i in num1){
//         total += num1[i];
//     }
// }
// console.log(calculateCartPrice2(122,342,553,399)); //return undefined

// Use of rest operator(...) 
// function CalculateCartPrice(...num1){
//     let total = 0;
//     for(i in num1){
//         total += num1[i];
//     }
//     return total;
// }
// console.log(CalculateCartPrice(122,342,553,399)); //return 1416


//2. How to handle objects using functions
// const User = {
//     username: "vinayak",
//     age: 20
// }

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);    
}
// handleObject(User);

//Another way 
// handleObject({
//     username: 'Hari',
//     age: 18
// }
// )

// If age is changed to Age, then it returns undefined, so typescript is preferred in such scenarios

//  copy array with functions !!!

