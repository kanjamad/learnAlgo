## Runtime Complexity

### How much more processing power/time is required to run your algorithm if we double the inputs?

- Constant Time (1) -->  No matter how many elements we're working with, the algorithm/ operation/ whatever will always take the same amount of time
- Logarithmic Time log(n) --> You have this if doubling the number of elements you are iterating over doesn't double the amount of work. Always assume that searching operations are log(n)
- Linear Time (n) -->  Iterating through all elements in a collection of data. If you see a for loop spanning from '0' to 'array.length' you probably have 'n' or linear runtime
- Quasilinear Time n*log(n) --> You have this if doubling the number of elements you are iterating over doesn't double the amount of work. Always assume that any sorting operation is n*log(n)
- Quadratic Time n^2 --> Every element in collection has to be compared to every other element . 'The handshake problem'
- Exponential Time 2^n --> If you add a **single** element to a collection, the processing power required doubles



## Big 'O' Notation
is another way of referencing runtime complexity
- O(n) --> Linear
- O(1) --> Constant
- O(n^2) --> Quadratic



## Identifying Runtime Complexity
- Iterating with a simple for loop through a single collection? ---> O(n)
- Iterating through half a collection? ---> O(n)
- Iterating through two **different** collections with separate for loops? ---> O(n+m)
- Two nested for loops iterating over the same collection? ---> O(n^2)
- Two nested for loops iterating over diffeerent collections? ---> O(n * m)
- Sorting ---> O(n * log(n))
- Searching a sorted array? ---> O(log(n))


## Space Complexity
How much more memory or RAM is required by doubling the problem set?

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

- Each additional character = 1 step through 1 loop    --->   This would be 'N' or 'Linear' runtime
- Iterating with a simple for loop through a single collection? ---> O(n)
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
- As 'n' increased by one, we had to do way more stuff, or (n*n) things total --->  This would be N^2, or 'Quadratic' runtime
- Two nested for loops iterating over the same collection? ---> O(n^2)
___

## Memoization
Store the arguments of each function call along with the result. If the function is called again with the same arguments, return the precomputed result, rather than running the function again


```
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
// Exponential Time 2^n --> If you add a single element to a collection, the processing power required doubles
*/


function fib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}


**** But If you looking for improve the runtime of this algorithm
// So clearly our fibonacci function is being called mutiple times with identical arguments
// If there is some way that we can avoid all these extra function calls then if we call the fibonacci with 6. all we need to do computation stuff for fib 5,4,3,2,1,0 one time

####---> Memoization <-----####


// ======= #1 sol iterative solution ============

//Time Complexity: O(n) -- > Linear

function fib(n) {
    const result = [0, 1];

    for (let i = 2; i <= n; i++) {
        const a = result[i - 1];
        const b = result[i - 2];

        result.push(a + b);
    }
    return result[n];

}

```



* Additional Resources
1. MDN
2. Stephen Course