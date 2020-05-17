// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true abba
//   palindrome("abcdefg") === false gfedcba

function palindrome(str) {

    debugger;
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];  
    });

}

palindrome("abcgefg");

module.exports = palindrome;
