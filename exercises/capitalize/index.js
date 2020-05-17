// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'




// ===========#2 sol ============ hard to code But easy to read=========

function capitalize(str) {

    // pseudocode
    // Create an empty string called 'result' But the problem is the first string 

    // Create 'result' which is the first character of the input string capitalized
    // For each character in the string
    // IF  the character to the left a space
    // Capitaliza it and add it to 'result'
    // ELSE
    // Add it to 'result'

    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}

module.exports = capitalize;


// ========= #1 sol ===============================



function capitalize(str) {
    // == pseudocode ===
    // Make an empty array 'words'
    // Split the input string by spaces to get an array
    // for each word in the array
    // Uppercase the first letter of the word
    // Join first letter with rest of the string
    // Push result into 'words' array
    // Join 'words' into a string and return it


    const words = [];

    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');

}

module.exports = capitalize;

// String.prototype.slice()
// slice() use with sring
// ex
// const word ='there'
// word.slice(1)// here
// word[0].toUpperCase//T


// const sentence = "Hi there"
// sentence.split(''); //['H','i','','t','h','e','r','e']
// sentence.split(' '); // ['Hi','there']


