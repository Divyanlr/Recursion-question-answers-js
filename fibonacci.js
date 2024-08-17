// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. 
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, 
// and where every number thereafter is equal to the sum of the previous two numbers.

function fib(n) {
    // Base cases: fib(1) and fib(2) both return 1
    if (n <= 2) return 1;
    // Recursive case: fib(n) = fib(n-1) + fib(n-2)
    return fib(n - 1) + fib(n - 2);
}

// Testing the function
console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3
console.log(fib(5)); // 5
console.log(fib(6)); // 8
console.log(fib(7)); // 13
console.log(fib(8)); // 21
console.log(fib(9)); // 34
console.log(fib(10)); // 55

// Example Calculation:
// fib(5):
// fib(4) + fib(3)
// (fib(3) + fib(2)) + (fib(2) + fib(1))
// ((fib(2) + fib(1)) + 1) + (1 + 1)
// ((1 + 1) + 1) + (1 + 1)
// 3 + 2
// 5