

// Declaration
const name = "Vinayak"
const repoCount = 8
// console.log(name+repoCount); //bad practice
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)

const name2 = new String("Vinayak-Vk");
console.log(name);
console.log(name2);
console.log(typeof name);
console.log(typeof name2);

console.log(name2.anchor());
console.log(name2.length);
console.log(name2.bold());
console.log(name2.indexOf('a'));
console.log(name2.slice(0,5));
console.log(name2.__proto__); // prototype

const greet = "   hare krishna   "
console.log(greet)
console.log(greet.trim());
// Used to clean fields before storing in databases

const url = "https://vinayak.com//vinayak%20kanhegaonkar"
// %20 is added when whitespace found in url
console.log(url.replace('%20','-'))
console.log(url.includes('google'));







 
