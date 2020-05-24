// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3






// ======= #2 sol Recursive solution ============
/*

example
fib(0) // 0
fib(1) //1


                                            fib(5)

                        fib(4)                                  fib(3)

            fib(3)              fib(2)                  fib(2)          fib(1)

        fib(2)  fib(1)      fib(1)    fib(0)        fib(1)      fib(0)

    fib(1)  fib(0)



* Pseudocode
//

*/

function fib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

module.exports = fib;



// ======= #1 sol iterative solution ============
/*

The algorithm here : look at the previous 2 numbers add them together.
-> But No entries that we can add together.
-> And we know is gonna be 0 and 1
-> So we just manually insert 0 and 1 into the result set.

* Pseudocode
// Create an array
// We're going to assemble all of the numbers up to entry n.
// return

Time Complexity: O(n) -- > Linear

*/

function fib(n) {
    const result = [0, 1];

    // we will start at index 2 because we want to produce this element first
    for (let i = 2; i <= n; i++) {
        // const a = result[result.length -1]
        // index 1 = 1 
        const a = result[i - 1];
        // index 0 = 0  
        const b = result[i - 2];

        result.push(a + b);
    }
    // return result[result.length - 1];
    return result[n];

}