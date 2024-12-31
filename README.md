# Unexpected String Concatenation in Node.js Function

This repository demonstrates a common yet easily overlooked error in JavaScript functions within a Node.js environment: unexpected string concatenation. 

The `myFunction` in `bug.js` intends to add two numbers. However, if one input is a string, JavaScript performs string concatenation instead of numerical addition, leading to unexpected results.

The solution, provided in `bugSolution.js`, showcases how to explicitly check the data type and perform type conversion to ensure correct numerical addition.