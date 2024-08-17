// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
    // Base case: if the array is empty, return an empty array
    if (arr.length === 0) return [];
    // Capitalize the first letter of the first string
    const capitalized = arr[0][0].toUpperCase() + arr[0].slice(1);
    // Recursive case: capitalize the first string and concatenate with the result of capitalizing the rest of the array
    return [capitalized].concat(capitalizeFirst(arr.slice(1)));
}

// Testing the function
console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car', 'Taco', 'Banana']
console.log(capitalizeFirst(['apple', 'orange', 'pear'])); // ['Apple', 'Orange', 'Pear']
console.log(capitalizeFirst([])); // []
console.log(capitalizeFirst(['hello', 'world'])); // ['Hello', 'World']
console.log(capitalizeFirst(['javascript', 'recursion'])); // ['Javascript', 'Recursion']


// Explanation:
// Base Case:

// If the array is empty (arr.length === 0), return an empty array.
// Recursive Case:

// Capitalize the first letter of the first string in the array (arr[0][0].toUpperCase() + arr[0].slice(1)).
// Combine the capitalized string with the result of capitalizeFirst called on the rest of the array (arr.slice(1)).
// Example:
// capitalizeFirst(['car', 'taco', 'banana']):
// Capitalize 'car' to 'Car'
// Combine ['Car'] with capitalizeFirst(['taco', 'banana'])
// Capitalize 'taco' to 'Taco'
// Combine ['Taco'] with capitalizeFirst(['banana'])
// Capitalize 'banana' to 'Banana'
// Combine ['Banana'] with capitalizeFirst([]) which returns []
// Combine all results: ['Car', 'Taco', 'Banana']