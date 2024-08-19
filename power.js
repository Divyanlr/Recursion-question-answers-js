// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. 
//This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
function power(base, exponent) {
    // Base case: any number to the power of 0 is 1
    if (exponent === 0) return 1;
    // Recursive case: multiply base by the result of base^(exponent-1)
    return base * power(base, exponent - 1);
}

// Testing the function
console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
console.log(power(3, 3)); // 27
console.log(power(5, 3)); // 125


// Explanation:
// Base Case:

// If exponent is 0, return 1 because any number raised to the power of 0 is 1.
// Recursive Case:

// If exponent is not 0, return base multiplied by the result of power(base, exponent - 1).
// Example:
// power(2, 4):
// 2 * power(2, 3)
// 2 * (2 * power(2, 2))
// 2 * (2 * (2 * power(2, 1)))
// 2 * (2 * (2 * (2 * power(2, 0))))
// 2 * (2 * (2 * (2 * 1)))
// 16