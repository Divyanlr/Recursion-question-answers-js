// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g.,
//  factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  
// factorial zero (0!) is always 1.


function factorial(n) {
    // Base case: 0! is 1
    if (n === 0) return 1;
    // Recursive case: n * factorial of (n - 1)
    return n * factorial(n - 1);
}

// Testing the function
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
console.log(factorial(10)); // 3628800


// Explanation:
// Base Case:

// If 
// 𝑛
// n is 0, return 1 because 
// 0
// !
// 0! is defined as 1.
// Recursive Case:

// If 
// 𝑛
// n is not 0, return 
// 𝑛
// n multiplied by the result of factorial(n - 1).
// Example:
// factorial(4):
// 4 * factorial(3)
// 4 * (3 * factorial(2))
// 4 * (3 * (2 * factorial(1)))
// 4 * (3 * (2 * (1 * factorial(0))))
// 4 * (3 * (2 * (1 * 1)))
// 24