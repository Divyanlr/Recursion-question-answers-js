// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

function recursiveRange(n) {
    // Base case: if n is 0, return 0
    if (n === 0) return 0;
    // Recursive case: n + recursiveRange(n - 1)
    return n + recursiveRange(n - 1);
}

// Testing the function
console.log(recursiveRange(6)); // 21 (0 + 1 + 2 + 3 + 4 + 5 + 6)
console.log(recursiveRange(10)); // 55 (0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)
console.log(recursiveRange(0)); // 0
console.log(recursiveRange(1)); // 1
console.log(recursiveRange(5)); // 15 (0 + 1 + 2 + 3 + 4 + 5)


// Explanation:
// Base Case:

// If n is 0, return 0 because the sum of numbers from 0 to 0 is 0.
// Recursive Case:

// Return n plus the result of recursiveRange(n - 1), effectively summing all numbers from n down to 0.
// Example:
// recursiveRange(6):
// 6 + recursiveRange(5)
// 6 + (5 + recursiveRange(4))
// 6 + (5 + (4 + recursiveRange(3)))
// 6 + (5 + (4 + (3 + recursiveRange(2))))
// 6 + (5 + (4 + (3 + (2 + recursiveRange(1)))))
// 6 + (5 + (4 + (3 + (2 + (1 + recursiveRange(0))))))
// 6 + (5 + (4 + (3 + (2 + (1 + 0)))))
// 21