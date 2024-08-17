// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum(obj) {
    let sum = 0;

    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            sum += obj[key];
        }
    }

    return sum;
}

// Testing the function
const obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
};

const obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

console.log(nestedEvenSum(obj1)); // 6 (2 + 2 + 2)
console.log(nestedEvenSum(obj2)); // 10 (2 + 2 + 2 + 2 + 2)



// Explanation:
// Base Case:

// If the value of the current key in the object is a number and even (typeof obj[key] === 'number' && obj[key] % 2 === 0), add it to sum.
// Recursive Case:

// If the value of the current key is an object (typeof obj[key] === 'object'), recursively call nestedEvenSum on that object (sum += nestedEvenSum(obj[key])).
// Iterate Through Object:

// Use a for...in loop to iterate through each key in the object obj.
// Example:
// nestedEvenSum(obj1):

// outer: 2 is even, add to sum.
// obj is an object, recursively call nestedEvenSum(obj[key]).
// inner: 2 is even, add to sum.
// otherObj is an object, recursively call nestedEvenSum(obj[key]).
// superInner: 2 is even, add to sum.
// notANumber and alsoNotANumber are not numbers, so skip.
// Sum is 2 + 2 + 2 = 6.
// nestedEvenSum(obj2):

// Similar logic applies, resulting in a sum of 10 (2 + 2 + 2 + 2 + 2).