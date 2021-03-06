// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// ======= #3 sol Memoization solution ============
/*
improve the runtime of recursive solution

Slow Fib function ====> Memoizer =====> Fast Memoized Fib Function

*/

function memoize(fn) {
    const cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }
        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    };
}


function slowFib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;





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



* Time complexity
// So when  we called Fibonacci with 5 :fib(5)
// function itself is being invoked many times
// Each of these boxes represents one function call fibonacci during our with recusive solution : so we get 15 calls to fib(5)


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


// ==============  compare two solution ======
/*

* Time complexity #sol2 recusive solution
// So when  we called Fibonacci with 5 :fib(5)
// function itself is being invoked many times
// Each of these boxes represents one function call fibonacci during our with recusive solution : so we get 15 calls to fib(5)
- Exponential Time 2^n --> If you add a **single** element to a collection, the processing power required doubles
// So for each additional element that we add into our collection or for each increment of the value N to our function. we're experiencing a dramatic increase in the number of function calls that are required.




**** Is there any way we can improve this recursive solution here****
#### We can do iterative solution is Linear runtime ****



**** But If you looking for improve the runtime of recursive solution algorithm
// So clearly our fibonacci function is being called mutiple times with identical arguments
// If there is some way that we can avoid all these extra function calls then if we call the fibonacci with 6. all we need to do computation stuff for fib 5,4,3,2,1,0 one time

####---> Memoization <-----####

Slow Fib function ====> Memoizer =====> Fast Memoized Fib Function


*/