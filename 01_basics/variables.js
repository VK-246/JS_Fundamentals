//For any website we need user account details to store
// This includes name,gmail,address,phone number etc..
//Some values are const and some are variables.
const accountId = 12345
// accountId = 345 | gives TypeError: Assignment to const variables
// console.log(accountId);

let accountEmail = "Vk@viit.ac.in"
// change
accountEmail = "21212@viit.ac.in"

var accountPassword = "Mumbai"
// change
accountPassword = "54321"
/* 
 Prefer not to use var due to issue of block scope and functional scope. 
 so a local declaration will change var value which is unwanted.
*/

accountCity = "Pune"
// W/O declaring type a variable can be declared
// Not a good practice
accountCity = "Mumbai"

let accountState;

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
