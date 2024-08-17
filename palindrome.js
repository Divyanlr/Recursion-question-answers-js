// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome 
// (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(str) {
    // Base case: if the string has 0 or 1 character, it is a palindrome
    if (str.length <= 1) return true;
    // If the first and last characters are not the same, it's not a palindrome
    if (str[0] !== str[str.length - 1]) return false;
    // Recursive case: check the substring excluding the first and last characters
    return isPalindrome(str.slice(1, str.length - 1));
}

// Testing the function
console.log(isPalindrome("")); // true
console.log(isPalindrome("a")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("abba")); // true
console.log(isPalindrome("abca")); // false


// Explanation:
// Base Case:

// If the string length is 0 or 1, return true because an empty string or a single character string is a palindrome by definition.
// Comparison of Characters:

// Compare the first character (str[0]) and the last character (str[str.length - 1]). If they are not the same, return false because the string cannot be a palindrome.
// Recursive Case:

// If the first and last characters are the same, recursively call isPalindrome on the substring excluding the first and last characters (str.slice(1, str.length - 1)).
// Example Calculation:
// isPalindrome("racecar"):
// Compare 'r' with 'r' (true), then call isPalindrome("aceca")
// Compare 'a' with 'a' (true), then call isPalindrome("cec")
// Compare 'c' with 'c' (true), then call isPalindrome("e")
// Since the string length is 1, return true