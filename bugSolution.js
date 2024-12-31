```javascript
function myFunction(a, b) {
  // Check if both inputs are numbers
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // Perform numerical addition
  } else {
    // Handle non-number inputs (e.g., throw an error or perform alternative actions)
    console.error('Invalid input: Both inputs must be numbers.');
    return NaN; // Return NaN to indicate an error
  }
}

console.log(myFunction(5, 5)); // Output: 10
console.log(myFunction(5, '5')); // Output: Invalid input: Both inputs must be numbers.
```