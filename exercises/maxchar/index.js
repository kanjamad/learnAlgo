// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++
        } else {
            charMap[char] = 1;
        }
    }
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}

module.exports = maxChar;


// ================
/* trick
using same 
1. What is the most common character in the string?
2. Does string A have the same characters as string B(is it annagram)?
3. Does the given string have any repeated characters n it?

String conver into Object

"Hello There"

{
    H:1,
    e:3,
    l:2,
    o:1,
    " ":1,
    t:1,
    h:1,
    r:1,
    !:1
}

key => character
value =>  the numbers of times that character has been found

const string = "Hello There!"
const chars = {};

for(let char of string){
    if(!chars[char]){
        chars[char] = 1;
    } else{
        chars[char]++;
    }
}

or

for(let char of string){
    chars[char] = chars[char] +1 || 1;
}



console.log(chars);

*/