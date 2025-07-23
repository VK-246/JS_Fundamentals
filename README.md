# 🚀 JS Fundamentals  

## 📌 Basics of JavaScript  

### 📖 Topics Covered  

### 1 Variables in JS 
  - using let, const and var.
  - var creates variables accessible to entire document, so use is not recommended as value can be changed from anywhere.
  - let and const are block/functional scoped.
  - JS is runtime languagee, no explicit declaration of data types needed.
  - "use strict"; //treat all JS code as newer version.
  - tc39 -> ECMA standards for javascript & mdn
  - numbers : 2^53 , bigint , string , boolean , null , undefined , symbol 
console.log(typeof(undefined)); //undefined is undefined
console.log(typeof(null)); //null is an object
          

#### 25 JavaScript Execution Behind the Scenes  
- Understanding the execution process:  
  - 🌍 **Global Execution Context**  
  - 🧠 **Memory Allocation Phase**  
  - ⚡ **Execution Phase**  
  - 🏗️ **Call Stack**  
- Example of a simple program execution  
- Using **Inspect → Sources → Snippets** to visualize the call stack  

#### 26 Control Flow in JavaScript  
- 🎯 Managing execution flow based on conditions  
- **Conditional Statements:**  
  - `if`, `else if`, `else`, `switch`  
- **Comparison Operators:**  
  - `===`, `!==`, `??` (Nullish Coalescing), `?` (Ternary)  
- **Truthy & Falsy Values:**  
  - ❌ **Falsy:** `0`, `""`, `false`, `BigInt 0n`, `null`, `undefined`  
  - ✅ **Truthy:** `1`, `' '`, `'false'`, `'0'`, `{}`, `[]`, `function() {}`  

#### 27,28,29 Loops in JavaScript  
- 🔄 **Basic loops and their use cases in API fetching:**  
  - `for`  
  - `while`  
  - `do while`  
- ➰ Introduction to the `for...of` loop  
