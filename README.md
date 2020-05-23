### Runtime Complexity

### How much more processing power/time is required to run your algorithm if we double the inputs?

- Constant Time (1) -->  No matter how many elements we're working with, the algorithm/ operation/ whatever will always take the same amount of time
- Logarithmic Time log(n) --> You have this if doubling the number of elements you are iterating over doesn't double the amount of work. Always assume that searching operations are log(n)
- Linear Time (n) -->  Iterating through all elements in a collection of data. If you see a for loop spanning from '0' to 'array.length' you probably have 'n' or linear runtime
- Quasilinear Time n*log(n) --> You have this if doubling the number of elements you are iterating over doesn't double the amount of work. Always assume that any sorting operation is n*log(n)
- Quadratic Time n^2 --> Every element in collection has to be compared to every other element . 'The handshake problem'
- Exponential Time 2^n --> If you add a **single** element to a collection, the processing power required doubles




___
Ex:<br>
1. String Reverse<br>
abc -> cba<br>
abcdefghijk -> kjihgfedcba<br>

```
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reversed = '';
    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    return reversed;
}
```

Each additional character = 1 step through 1 loop    --->   This would be 'N' or 'Linear' runtime
___
2. Steps Algorithm

```
// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for (let row = 0; row < n; row++) {
        let stair = '';

        for (let column = 0; column < n; column++) {
            if (column <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }
        console.log(stair);
    }
}
```
As 'n' increased by one, we had to do way more stuff, or (n*n) things total --->  This would be N^2, or 'Quadratic' runtime
___





* Additional Resources
1. MDN
2. Stephen Course