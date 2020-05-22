// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0



// ============= sol#2 regular expression ======== 
/*
.match() => used to see if some possible (thing) is included inside of this string
.match(//) => we can pass in // a regular expression and this regular expression is going to check to see if we have any values inside 
.match(/[]/) => [] have square braces, if this str contains any character that is inside of [] then let us know. So we will put in all the characters that we care about  str.match(/[aeiou]/)
str.match(/[aeiou]/gi)  => add 2 options g: mean to make sure we don't stop at the first match that we find inside of our string
i: mean insensitive or case insensitive like toLowerCase() i will take care for it
str.match(/[aeiou]/gi) => if match will return array, if not match will return null


*/

function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;


}

module.exports = vowels;




// ============ sol#1 iterative solution ========

/*
 * pseudocode
//  Create a 'couter' variable will initialize with a default value of zero
// Loops (iterate through all the character inside of string)
    // IF a given character is a vowel 
        // Then increment the counter 
// return a 'counter'





example:  .includes()

#1 str
const word = "Hello there";
word.includes("ello") //True
word.includes("F") //False


#2 array 
(might a litte bit clear)

const word = ['a','b','c'];
word.includes("c")//True

*/



function vowels(str) {
    let count = 0;
    // const checker = "aeiou";
    const checker = ['a', 'e', 'i', 'o', 'u']

    for (let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            count++;
        }
    }

    return count;

}