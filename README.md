# 🚀 JS Fundamentals  

## 📌 Basics of JavaScript  

### 📖 Topics Covered  

📘1&2.Variables&DataTypes:var=fn-scoped,use is risky;let,const=block-scoped,preferred;const=fixed values;JS is dynamically typed;"use strict" for modern JS;refs:tc39,MDN;Types:Number(up to 2^53),BigInt,String,Boolean,Null,Undefined,Symbol;typeof null="object",typeof undefined="undefined".

📗3.TypeConversion&Operations:String→Number:"33"→33,"33abc"→NaN;String→Boolean:""→false,"hitesh"→true;Number→String:33→"33";Arithmetic:+,-,*,/,%,**,unary -;String concat:"1"+2+2≠1+2+"2";Implicit conversion:+true=1,+""=0;Chained assignment:num1=num2=2+2;++counter increases value.

📙4.Comparisons:==does type coercion,===checks value+type;"2"==2 true,"2"===2 false;"2">1,true;"02">1,true;null>=0→true,null==0→false;undefined==0,false;undefined<0,false;undefined>0,false;avoid==with null/undefined;strict comparison preferred.

📕5.DynamicallyTypedLang:JS types set at runtime;let x=10→x="hi"→x=true allowed;vs statically typed langs(Java,C++) with fixed types and compile-time checks;JS is flexible but riskier at runtime.

📒6.Primitive&Non-PrimitiveTypes:Primitives=String,Number,Boolean,null,undefined,Symbol,BigInt;typeof null="object",Symbol('123')!==Symbol('123');bigint has n suffix;Non-Primitives=Array,Object,Function;typeof array/object="object",typeof function="function".

📓7.MemoryManagement:Primitives in Stack(call by value);Non-Primitives in Heap(call by reference);copying primitive var creates new value;copying object shares reference;changing one affects both.

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
