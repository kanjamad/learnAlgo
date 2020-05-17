// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// ========= #2 sol===============
function anagrams(stringA, stringB) {
    // .sort() ; using with Array Not string
    // const numbers = [10, 30, 5, -90, 1000];
    // numbers.sort();// [-90, 5, 10, 30, 1000]

    // const letter = ['z', 'v', 'd', ' a', 'c']
    // letter.sort(); // ['a', 'c', 'd', 'v', 'z']


    //pseudocode
    // create a helper function cleanString
    // clean up both string by removing space and lowercase
    // turn string into an array .split('')
    // then .sort() both string
    // then turn it back into string .join('')
    // compareson two string

    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;



// ================================= #1 sol =======================================

function anagrams(stringA, stringB) {

    // RegExp ; remove space and !
    // \w
    // const word = "HI THERE!!!!"
    // word.replace(/[^\w]/g, "").toLowerCase(); //hithere

    // hello
    // {
    //     h:1,
    //     e:1,
    //     l:2,
    //     o:1
    // }

    // llehos
    // {
    //     h:1,
    //     e:1,
    //     l:2,
    //     0:1,
    //     s:1
    // }

    // Is to generate a character map OUT of both the String 
    // iterate over one of those character maps And compare all the letters inside of it and the Quantites
    // count the length

    // ========== #sol using character maps ===========
    // bulid a character map out of stringA and stringB
    // compare all the characters inside those 2 maps 
    // create helper function to buile a character map ; avoid write 2 separate for loops

    const aCharMap = bulidCharMap(stringA);
    const bCharMap = bulidCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    /* iterate through 
    => object for in loops
    => array for of loops
    */
    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }

    return true;

}

function bulidCharMap(str) {
    const charMap = {};
    // .replace(/[^\w]/g, '') meaning ==> Any time that we find a character that is not a number a character Capercase or lowerCase character we want to replace it with Notthing or essentially an empty string ''
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

module.exports = anagrams;



// ====== How pull out all the keys these object =======
// ========= pull out the keys out of object ===========
// const obj = {
//     a:1,
//     b:1,
//     c:1
// };

// Object.keys(obj); // ["a","b","c"]
// Object.keys(obj).length // 3