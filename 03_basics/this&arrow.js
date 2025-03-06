// this keyword 
// Node vs Browser Console
//  this in Node: gives current scope in nested or {} in global or global in function console.log(this)
//  this in Browser Console: gives the window scope in function or in global
//const: Items of an object can be changed but not the object themselves. Hence changing user.username for const user is valid
// this.item gives undefined for access in functions | works in objects as this.key
// implicit return with arrow method

const user = {
    username: "hitesh",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// //const: Items of an object can be changed but not the object themselves. Hence changing user.username for const user is valid unless freeze keyword is used 
// // this returns the user's scope
// user.welcomeMessage()


// console.log(this); //Gives {}

//  Function declarations

// 1.
// function chai(){
//     let username = "hitesh"
//     // this gives undefined for access in functions | works in objects
//     console.log(this.username);
// }
// chai()

// // 2.
// const chai = function () {
//     let username = "hitesh"
//     console.log(username);
// }
// console.log(chai()); //gives one undefined after name as chai() does not return anything

// 3. using the arrow function
// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }
// chai()

// explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return with arrow function
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )
// for function {} means we have to use return , but if {} is object body , in such cases we use () parenthesis
// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// this in function
// const eg = function() {
//     console.log(this)
// }
// eg();