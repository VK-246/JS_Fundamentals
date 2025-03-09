const arr = ['cpp','c','python','js','html','css']


// // Variation - 1
// arr.forEach( function (key) {
//     console.log(key)
// } )

// // Variation - 2
// arr.forEach( (item) => { console.log(item) } )

// // Variation - 3
// function printMe(item){
//     ( console.log(item) )
// }
// arr.forEach(printMe)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Parmeters of for each function
// arr.forEach( function (key,idx,ar) {
//     console.log(key,idx,ar)
// } )

// For accessing array of js object data type
// very useful for practical purposes 
const myCoding = [
    {
        LangName: "Python",
        FileName: 'py'
    },
    {
        LangName: "ruby",
        FileName: 'rb'
    }
]

myCoding.forEach( function(item) {
     console.log(`Language ${item.LangName} has FileName ${item.FileName}`);
 } )

// for each is fine for printing scenarios