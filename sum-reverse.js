// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single 
// value in the array returns true when passed to the callback. Otherwise it returns false.


function someRecursive(arr, callback) {
    // Base case: if the array is empty, return false
    if (arr.length === 0) return false;
    // If the callback returns true for the first element, return true
    if (callback(arr[0])) return true;
    // Recursive case: check the rest of the array
    return someRecursive(arr.slice(1), callback);
}

// Testing the function
const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([], isOdd)); // false


// Explanation:
// Base Case:

// If the array is empty (arr.length === 0), return false because there are no elements to check against the callback.
// Check First Element:

// If the callback function returns true for the first element of the array (arr[0]), return true.
// Recursive Case:

// If the first element does not satisfy the callback, call someRecursive on the rest of the array (arr.slice(1)) and check again.
// Example:
// someRecursive([1, 2, 3, 4], isOdd):

// isOdd(1) returns true, so the function returns true.
// someRecursive([4, 6, 8, 9], isOdd):

// isOdd(4) returns false, so call someRecursive([6, 8, 9], isOdd)
// isOdd(6) returns false, so call someRecursive([8, 9], isOdd)
// isOdd(8) returns false, so call someRecursive([9], isOdd)
// isOdd(9) returns true, so the function returns true.