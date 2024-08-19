// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str) {
    // Base case: if the string is empty, return an empty string
    if (str.length === 0) return "";
    // Recursive case: take the last character and add it to the reverse of the rest of the string
    return reverse(str.slice(1)) + str[0];
}

// Testing the function
console.log(reverse("")); // ""
console.log(reverse("a")); // "a"
console.log(reverse("abc")); // "cba"
console.log(reverse("hello")); // "olleh"
console.log(reverse("JavaScript")); // "tpircSavaJ"


// Explanation:
// Base Case:

// If the string is empty (str.length === 0), return an empty string. This is the simplest form of the problem and stops the recursion.
// Recursive Case:

// Take the last character (str[0]) and add it to the result of reverse called on the rest of the string (str.slice(1)).
// Example Calculation:
// reverse("hello"):
// reverse("ello") + "h"
// (reverse("llo") + "e") + "h"
// ((reverse("lo") + "l") + "e") + "h"
// (((reverse("o") + "l") + "l") + "e") + "h"
// ((((reverse("") + "o") + "l") + "l") + "e") + "h"
// "olleh"