// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // str into an array used .split('')
    // array used .reverse()
    // join array back to str used .join('')
    // return result

    // sol#1

    // const arr = str.split('');
    // arr.reverse();
    // return arr.join('');


    // sol#2 ----- clean up

    // return str.split('').reverse().join('');

    // sol#3

    let reversed ='';
    for (let i=0; i<str.length;i++){
        reversed= str[i]+ reversed;
    }
    return reversed;
}

module.exports = reverse;
