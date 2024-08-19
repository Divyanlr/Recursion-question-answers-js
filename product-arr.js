// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr) {
    // Base case: if the array is empty, return 1
    if (arr.length === 0) return 1;
    // Recursive case: multiply the first element by the product of the rest of the array
    return arr[0] * productOfArray(arr.slice(1));
}

// Testing the function
console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 4])); // 24
console.log(productOfArray([2, 5, 10])); // 100
console.log(productOfArray([2])); // 2
console.log(productOfArray([])); // 1


// Explanation:
// Base Case:

// If the array is empty (arr.length === 0), return 1 because the product of no numbers is 1.
// Recursive Case:

// Multiply the first element of the array (arr[0]) by the result of productOfArray called on the rest of the array (arr.slice(1)).
// Example:
// productOfArray([1, 2, 3]):
// 1 * productOfArray([2, 3])
// 1 * (2 * productOfArray([3]))
// 1 * (2 * (3 * productOfArray([])))
// 1 * (2 * (3 * 1))
// 6