// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string


function collectStrings(obj) {
    let result = [];

    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            result.push(obj[key]);
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            result = result.concat(collectStrings(obj[key]));
        }
        // Arrays are not processed, as per requirements
    }

    return result;
}

// Testing the function
const obj1 = {
    a: 'hello',
    b: 123,
    c: {
        d: 'world',
        e: {
            f: 'foo',
            g: 456
        }
    }
};

const obj2 = {
    x: 'apple',
    y: ['orange', 'banana'],
    z: {
        w: 'grape',
        v: {
            u: 'pear',
            t: ['kiwi', 'plum']
        }
    }
};

console.log(collectStrings(obj1)); // ['hello', 'world', 'foo']
console.log(collectStrings(obj2)); // ['apple', 'grape', 'pear']




// Explanation:
// Base Case:

// If the value is a string (typeof obj[key] === 'string'), push it into the result array.
// Recursive Case:

// If the value is an object (and not an array), recursively call collectStrings on that object (result = result.concat(collectStrings(obj[key]))).
// Handling Arrays:

// Arrays are skipped by checking !Array.isArray(obj[key]) to ensure only plain objects are recursively processed.
// Iterate Through Object:

// Use a for...in loop to iterate through each key in the object obj.
// Example:
// collectStrings(obj1):

// a: 'hello' is a string, so add 'hello' to result.
// b: 123 is not a string, skip.
// c: { d: 'world', e: { f: 'foo', g: 456 } } is an object, so recursively call collectStrings.
// d: 'world' is a string, so add 'world' to result.
// e: { f: 'foo', g: 456 } is an object, so recursively call collectStrings.
// f: 'foo' is a string, so add 'foo' to result.
// g: 456 is not a string, skip.
// Return ['hello', 'world', 'foo'].
// collectStrings(obj2):

// x: 'apple' is a string, so add 'apple' to result.
// y: ['orange', 'banana'] is an array, skip.
// z: { w: 'grape', v: { u: 'pear', t: ['kiwi', 'plum'] } } is an object, so recursively call collectStrings.
// w: 'grape' is a string, so add 'grape' to result.
// v: { u: 'pear', t: ['kiwi', 'plum'] } is an object, so recursively call collectStrings.
// u: 'pear' is a string, so add 'pear' to result.
// t: ['kiwi', 'plum'] is an array, skip.
// Return ['apple', 'grape', 'pear'].