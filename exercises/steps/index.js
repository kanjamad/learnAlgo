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



// ============= # 2sol recursion ===========
/*

step1: defind function
step2: The base case (mean decide there is no more work for us to do), and it's time to return 
and stop the recursion process

example:
finction printNumber(n, dec=1){
    if(n===0){
        return;
    }

    console.log(n);
    printNumber(n - dec);
}

printNumber(10);
===========

*Recursion Tips*
1. Figure out the bare minimun pieces of information to represent your problem
2. Give reasonable defaults to the bare minimun pieces of info
3. Check the base case. Is there any work left to do? If not, return
4.Do some work. Call your function again, making sure the arguments have changed in some fashion.

n =  3
row = i
column = j

                                j=column
        |    --------------------------->                      
        |
        |    |-------c0 |-------c1|-------c2
        |    |    #    ||    -   ||    -   |
        |    r0-------   r0------ r0------ 
        |    |-------c0 |-------c1|-------c2
        |    |    #    ||    #   ||    -   |
        |    r1-------   r1------ r1------ 
        |    |-------c0 |-------c1|-------c2
i = row |    |    #    ||    #   ||    #   |
        V    r2-------   r2------ r2------ 

*-- pseudocode---
// If(row === n ) then we have hit the end of our problem
// If the 'stair' string has a length === n then we are at the end of a row
// If the length of the stair string is less than or equal to the row number we're working on, we add a'#', otherwise add a space


*/
function steps(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }

    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }

    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }
    steps(n, row, stair);

}

module.exports = steps;


// ============= #1sol==============
/*

n =  3
row = i
column = j

                                j=column
        |    --------------------------->                      
        |
        |    |-------c0 |-------c1|-------c2
        |    |    #    ||    -   ||    -   |
        |    r0-------   r0------ r0------ 
        |    |-------c0 |-------c1|-------c2
        |    |    #    ||    #   ||    -   |
        |    r1-------   r1------ r1------ 
        |    |-------c0 |-------c1|-------c2
i = row |    |    #    ||    #   ||    #   |
        V    r2-------   r2------ r2------ 
    
*--- pseudocode ---
// for loops from 0 to n (iterate through rows)
    // Create an empty string 'stair'
    // for loops from 0 to n(iterate through column)
        // IF the current column is equal to less than =< the current row
            // Add a '#' to 'stair'
        // ELSE
            // Add a space to 'stair'
    // Console log 'stair'

*/

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