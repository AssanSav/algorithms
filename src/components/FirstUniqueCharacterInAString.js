// First Unique Character in a String

// Solution
// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.
 

// Note: You may assume the string contains only lowercase English letters.



var firstUniqChar = function(s) {
    for(let i = 0; i < s.length; i++){
        if(s !== "" && s.indexOf(s.charAt(i)) === s.lastIndexOf(s.charAt(i))) return i
    }
    return -1
};