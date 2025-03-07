// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// BASIC LOOPS IN EVERY LANGUAGE
//1. for (let index = 0; index < array.length; index++) {
    //     const element = array[index];    
    // }
    
    // 2. while (condition) {
        
    // }
    
    // 3. do {
        
    // } while (condition);
    
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// More loops
// for of
let arr = [1,2,3,5,6]
for (const element of arr) {
    console.log(element);
}

const greetings = "hare krishna!"
for (const pos in greetings) {
    console.log(`At ${pos}, Char is: ${greetings[pos]}`);
}

// Maps: for of works with below syntax
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States")
map.set('Ger',"Germany")
// console.log(map);

for (const [key,value] of map) {
    console.log(`${key} : ${value}`);
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
    if (Object.prototype.hasOwnProperty.call(myObject, key)) {
        const element = myObject[key];
        console.log(element);
        
    }
}