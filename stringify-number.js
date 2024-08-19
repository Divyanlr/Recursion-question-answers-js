// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. 
// Recursion would be a great way to solve this!
// The exercise intends for you to create a new object with the numbers converted to strings, and not modify the original. Keep the original object unchanged.


function stringifyNumbers(obj) {
    // Create a new object to store the converted values
    let newObj = {};

    for (let key in obj) {
        // Check if the value is a number
        if (typeof obj[key] === 'number') {
            newObj[key] = obj[key].toString(); // Convert number to string
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            // If the value is an object (and not an array), recursively call stringifyNumbers
            newObj[key] = stringifyNumbers(obj[key]);
        } else {
            // Otherwise, copy the value as-is
            newObj[key] = obj[key];
        }
    }

    return newObj;
}

// Testing the function
const obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
};

const obj2 = {
    1: 1,
    2: {
        2: {
            3: 4
        },
        4: {
            5: {
                6: 7
            }
        }
    }
};

console.log(stringifyNumbers(obj)); 
// { num: '1', test: [], data: { val: '4', info: { isRight: true, random: '66' } } }

console.log(stringifyNumbers(obj2)); 
// { '1': '1', '2': { '2': { '3': '4' }, '4': { '5': { '6': '7' } } } }









// Explanation:
// Base Case:

// If the value is a number (typeof obj[key] === 'number'), convert it to a string (obj[key].toString()) and add it to newObj.
// Recursive Case:

// If the value is an object (and not an array), recursively call stringifyNumbers on that object (newObj[key] = stringifyNumbers(obj[key])).
// Iterate Through Object:

// Use a for...in loop to iterate through each key in the object obj.
// Handling Arrays:

// Arrays are skipped by checking !Array.isArray(obj[key]) to ensure only plain objects are recursively processed.
// Example:
// stringifyNumbers(obj):
// num: 1 is a number, so convert to '1'.
// test: [] is an array, so copy as-is.
// data: { val: 4, info: { isRight: true, random: 66 } } is an object, so recursively call stringifyNumbers on it.
// val: 4 is a number, so convert to '4'.
// info: { isRight: true, random: 66 } is an object, so recursively call stringifyNumbers on it.
// isRight: true is a boolean, so copy as-is.
// random: 66 is a number, so convert to '66'.