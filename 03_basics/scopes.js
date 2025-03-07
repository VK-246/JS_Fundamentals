// scoping block and global
// scope -> {} if,function,loop
// closure
// dom

//  ----------------------------------------------
// scope -> {} if,function,loop
// Var vs Let

// var c = 300
// if (true) {
//     let a = 10
//     const b = 20
//      var c = 30 //mujhe mere aukat me rehna chahia lekin me aukat se bahar aa gya, kyuki var ne uksaya
// }

//  //console.log(a); //Reference Error: a not defined
// console.log(c); // 30

// let c = 300
// if (true) {
//     let a = 10
//     const b = 20
//     let c = 30
// }
// console.log(c); // 300

//   -----------------------------------------------------------------------
// Nested scope

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // me to error dunga

     two()
}
// one()

// nested if scope
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); //me to error dunga
}
// console.log(username); //me bhi error dunga


// ++++++++++++++++++ interesting ++++++++++++++++++
// hoisting and execution context.


console.log(addone(5)) 
function addone(num){
    return num + 1
}

// const has a local scope so addTwo is not read in memory phase
// whereas function is read in memmory phase
// console.log(addTwo(5));
// storing function in a variable
const addTwo = function(num){
    return num + 2
}