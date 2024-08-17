// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.


function flatten(arr) {
    // Base case: if the array is empty, return an empty array
    if (arr.length === 0) return [];
    // Recursive case: flatten the first element (if it is an array) and concatenate with the flattening of the rest of the array
    const [first, ...rest] = arr;
    if (Array.isArray(first)) {
        return flatten(first).concat(flatten(rest));
    } else {
        return [first].concat(flatten(rest));
    }
}

// Testing the function
console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1, 2, 3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1, 2, 3]
console.log(flatten([])); // []


// Explanation:
// Base Case:

// If the array is empty (arr.length === 0), return an empty array.
// Recursive Case:

// Destructure the array into first and rest.
// Check if first is an array:
// If it is, recursively flatten first and concatenate it with the result of flattening rest.
// If it isn't, simply concatenate first with the result of flattening rest.
// Example:
// flatten([1, 2, 3, [4, 5]]):
// 1 is not an array, so return [1] concatenated with flatten([2, 3, [4, 5]])
// 2 is not an array, so return [2] concatenated with flatten([3, [4, 5]])
// 3 is not an array, so return [3] concatenated with flatten([[4, 5]])
// [4, 5] is an array, so return flatten([4, 5]) concatenated with flatten([])
// 4 is not an array, so return [4] concatenated with flatten([5])
// 5 is not an array, so return [5] concatenated with flatten([])
// Combine all results: [1, 2, 3, 4, 5]`