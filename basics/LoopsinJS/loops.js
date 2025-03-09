// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// BASIC LOOPS IN EVERY LANGUAGE
//1. for (let index = 0; index < array.length; index++) {
    //     const element = array[index];    
    // }
    
    // 2. while (condition) {
        
    // }
    
    // 3. do {
        //runs atleast once
    // } while (condition);
    
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// More loops
// for of picks values of arr elements, has syntax to access map
// for in gets 0 based indexing for arrays, 


//4. for of
let arr = [1,2,3,5,6]
for (const element of arr) {
    // console.log(element);
}
//5. for in aur for off dono use kr skte he idhar
const greetings = "hare krishna!"
for (const pos in greetings) {
    // console.log(`At ${pos}, Char is: ${greetings[pos]}`);
}

// Introduction to map data structure in js
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States")
map.set('Ger',"Germany")
// console.log(map);

// //Maps: for of works with below syntax
// for (const key of map) {
//     console.log(key);
// }
// for (const [key,value] of map) {
//    console.log(`${key} : ${value}`);
// }

// for in on maps
for (const key in map) {
//    console.log(key);
   
}

// On Objects: for of does not work
const myObject = {
    'game1' : 'NFS',
    'game2' : "GTA"
}
// //for of not for objects
// for (const key of myObject) {
//     console.log(key); 
// }

// using for in
for (const key in myObject) {
        // console.log(key); //prints keys
        // console.log(myObject[key])//prints value
        // console.log(`${key} is ${myObject[key]}`);   
}