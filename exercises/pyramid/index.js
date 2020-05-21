// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'



// ========= #2 sol : recursion solution===========
function pyramid(n, row = 0, level = '') {
    if (n === row) {
        return;
    }

    if ((2 * n) - 1 === level.length) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    // we have to calculate midpoint And decide if the current element that we were considering is within that range of the midpoint 
    const midpoint = Math.floor(((2 * n) - 1) / 2);
    let add;
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }
    pyramid(n, row, level + add);

}
module.exports = pyramid;










// ========= #1 sol : Theiterative solution===========
/*

n =  2
row = i
column = j

                                j=column
                                3 column
        |    --------------------------->                      
        |
        |    |-------c0 |-------c1|-------c2 
        |    |    -    ||    #   ||    -   | 
        |    r1-------   r1------ r1------   
        |    |-------c0 |-------c1|-------c2 
i = row |    |    #    ||    #   ||    #   | 
n=2     V    r2-------   r2------ r2------   





n =  3
row = i
column = j

                                j=column
                                5 column
        |    --------------------------->                      
        |
        |    |-------c0 |-------c1|-------c2 |-------c3 |-------c4
        |    |    -    ||    -   ||    #   | |    -    ||    -   |
        |    r0-------   r0------ r0------   r0 -------   r0------
        |    |-------c0 |-------c1|-------c2 |-------c3 |-------c4
        |    |    -    ||    #   ||    #   | |    #    ||    -   |
        |    r1-------   r1------ r1------   r1-------   r1------ 
        |    |-------c0 |-------c1|-------c2 |-------c3 |-------c4
i = row |    |    #    ||    #   ||    #   | |    #    ||    #   |
n=3     V    r2-------   r2------ r2------   r2-------   r2------ 



                                j=column
                                7 column
        |    --------------------------->                      
        |
        |    |-------c0 |-------c1|-------c2 |-------c3 |-------c4|-------c5|-------c6
        |    |    -    ||    -   ||    -   | |    #    ||    -   ||    -   ||    -   |
        |    r0-------   r0------ r0------   r0 -------   r0------  r0------  r0------
        |    |-------c0 |-------c1|-------c2 |-------c3 |-------c4|-------c5|-------c6
        |    |    -    ||    -   ||    #   | |    #    ||    #   ||    -   ||    -   |
        |    r1-------   r1------ r1------   r1-------   r1------  r1------ r1------
        |    |-------c0 |-------c1|-------c2 |-------c3 |-------c4|-------c5|-------c6
        |    |    -    ||    #   ||    #   | |    #    ||    #   ||    #   ||    -   |
        |    r2-------   r2------ r2------   r2-------   r2------  r2------  r2------ 
        |    |-------c0 |-------c1|-------c2 |-------c3 |-------c4|-------c5|-------c6
i = row |    |    #    ||    #   ||    #   | |    #    ||    #   ||    #   ||    #   |
n=4     V    r3-------   r3------ r3------   r3-------   r3------  r3------  r3------ 

* pseudocode
// for loops From 0 to n ( iterate through rows)
    // Create an empty string, 'level'
    // for loops From o to (2*n)-1 (iterate through columns)
        // IF the column should have a #
            // Add a '#' to 'level'
        // ELSE
            // Add a space to 'level'
        // console log 'stair'



Example
// caculate the mid point

const columns = [0,1,2,3,4,];
const row = 0;
Math.floor(5/2); // 2


const columns = [0, 1, 2, 3, 4, ];
const row = 1;

Math.floor(5 / 2)       // 2
Math.floor(5 / 2)+1     // 3
Math.floor(5 / 2)-1     // 1

*/


function pyramid(n) {
    // caculate the mid point index
    const midpoint = Math.floor(((2 * n) - 1) / 2);

    for (let row = 0; row < n; row++) {
        let level = '';

        for (let column = 0; column < 2 * n - 1; column++) {
            //row number of element to the left of midpoint and && row number of elements to the right of midpoint
            if (midpoint - row <= column && midpoint + row >= column) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
}