// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(arr) {
    // Base case: if the array is empty, return an empty array
    if (arr.length === 0) return [];

    // Capitalize the first word and concatenate with the result of capitalizing the rest of the array
    const capitalizedWord = arr[0].toUpperCase();
    return [capitalizedWord].concat(capitalizeWords(arr.slice(1)));
}

// Testing the function
console.log(capitalizeWords(['hello', 'world'])); // ['HELLO', 'WORLD']
console.log(capitalizeWords(['apple', 'orange', 'banana'])); // ['APPLE', 'ORANGE', 'BANANA']
console.log(capitalizeWords([])); // []
console.log(capitalizeWords(['javascript', 'recursion'])); // ['JAVASCRIPT', 'RECURSION']



// Explanation:
// Base Case:

// If the array is empty (arr.length === 0), return an empty array.
// Recursive Case:

// Capitalize the first word (arr[0].toUpperCase()).
// Concatenate the capitalized word with the result of recursively calling capitalizeWords on the rest of the array (arr.slice(1)).
// Example:
// capitalizeWords(['hello', 'world']):

// Capitalize 'hello' to 'HELLO'.
// Capitalize 'world' to 'WORLD'.
// Return ['HELLO', 'WORLD'].
// capitalizeWords(['apple', 'orange', 'banana']):

// Capitalize 'apple' to 'APPLE'.
// Capitalize 'orange' to 'ORANGE'.
// Capitalize 'banana' to 'BANANA'.
// Return ['APPLE', 'ORANGE', 'BANANA'].