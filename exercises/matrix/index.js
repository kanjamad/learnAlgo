// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    // * Pseudocode

    // Create empty array of arrays called 'result'
    // Create a counter variable, starting at 1
    // Create a number of variables that keeptrack of current column (startColumn, endColumn, startRow, endRow)
    // As long as ( start column <= end column ) AND (start row <= end row)
    // Loop from start column to end column
    // At results[start_row][i] assign counter variable
    // Increment counter
    // Increment start row
    // Loop from start row to end row
    // At results[i][end_column] assign counter variable
    // Increment counter
    // Decrement end column
    // ...repeat for other two sides
    let results = [];

    for (let i = 0; i < n; i++) {
        results.push([]); //[[],[]] ;if n = 2
    }

    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
        // Top Row
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;

        // Right column
        for (let i = startRow; i <= endRow; i++) {
            results[i][endRow] = counter;
            counter++;
        }
        endColumn--;

        // Bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;

        // start  column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }

    return results;



}

module.exports = matrix;




/*=========== #1sol ================
look at the example 
So we go in this clockwise spiraling in fastion the last number to print out inside will be n^2


Example
                    Start                  End     
                    Column                Column
                    =0                       =2
                [
start Row =0       [ 1           2           3   ]
                   [ 8           9           4   ]
End   Row = 2      [ 7           6           5   ]
                ]


*Pseudocode
// Create empty array of arrays called 'result'
// Create a counter variable, starting at 1
// Create a number of variables that keeptrack of current column (startColumn, endColumn, startRow, endRow)
// As long as ( start column <= end column ) AND (start row <= end row)
    // Loop from start column to end column
        // At results[start_row][i] assign counter variable
        // Increment counter
    // Increment start row
    // Loop from start row to end row
        // At results[i][end_column] assign counter variable
        // Increment counter
    // Decrement end column
    // ...repeat for other two sides


example

const arr = [];
arr[3] = "Hi there!"

consolr.log(arr)// [null,null,null,"Hi there!"]

*/