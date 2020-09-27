// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false
 

// Constraints:

// s consists only of printable ASCII characters.


var isPalindrome = function(s) {
    var string = s.toLocaleLowerCase().replace(/[^0-9a-zA-Z]/g, '')
    var reversedString = string.split("").reverse().join("")
    console.log("S",string)
    console.log("R",reversedString)
    return (string === reversedString)
};