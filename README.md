# 🚀 JS Fundamentals  

## 📌 Basics of JavaScript  

### 📖 Topics Covered  

📘 1 & 2. Variables and Data Types in JavaScript
Variable Declarations:

var: Function-scoped, avoid using due to hoisting and global access issues.

let & const: Block-scoped, safer and preferred.

const: For values that don’t change.

JS is dynamically typed – no need to declare types explicitly.

"use strict" enforces modern JS syntax.

Standard references: tc39 (ECMA) and MDN Docs.

Primitive Data Types:

Number (up to 2^53), BigInt, String, Boolean, Null, Undefined, Symbol
typeof undefined // "undefined"
typeof null      // "object" (known quirk in JS)

  ### 3 Type Conversion & Operations in JavaScript
This script demonstrates type conversion and basic operations in JavaScript:

 Type Conversion:

String ➝ Number: "33" becomes 33, "33abc" becomes NaN

String ➝ Boolean: "" is false, any non-empty string (e.g., "hitesh") is true

Number ➝ String: 33 becomes "33"

➕ Basic Arithmetic & String Operations:

Arithmetic: +, -, *, /, %, ** (power), unary -

String concatenation and operator precedence shown with "1" + 2 + 2 vs 1 + 2 + "2"

⚠️ Implicit Conversion:

Use of +true and +"" to demonstrate coercion to numbers

Multiple assignments (num1 = num2 = num3 = 2 + 2) and increment operators (++gameCounter)

🔗 Reference: ECMAScript Type Conversion

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
