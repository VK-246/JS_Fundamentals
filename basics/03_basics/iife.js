// Immediately Invoked Function Expressions (IIFE)
// What? Function which gets immmediately executed after function call
// why? Sometimes we do not want global variable pollution when runtime is unexpected due to external files
// syntax: ()() for definition and execution respectively
// IIFE is involed but does not know when to end the context unless ; is given
// So running another iife gives `TypeError: (intermediate value)(...) is not a function` if ; is not used at end
// types of iife are names and un-named

// // w/o ; 
// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })()
// // error instance
// (function aurcode(){
//     console.log(`DB CONNECTED`);
// })();

// // with ; errorless instance
// (function chai(){
//     console.log(`DB CONNECTED`);
// })();
// (function aurcode(){
//     console.log(`DB CONNECTED`);
// })();

// // with ; errorless instance 2
// // Different function definition
// (function chai(){
//     console.log(`DB CONNECTED`);
// })();
// ( () => {
// //un-named iife    
// console.log(`DB CONNECTED 2`);
// } )();

// passing values to 2nd () works!
// (function chai(){
//     console.log(`DB CONNECTED`);
// })();
// ((name) => {
//     console.log (`DB CONNECTED TO ${name}`);
// } )('Vinayak');
