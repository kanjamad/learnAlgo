// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    // declare constructor function because still need to initialize an array when class stack is instantiated.
    // Then will use that internal array to manage all the data that gets added and removed from my stack

    constructor() {
        this.data = [];
    }

    push(record) {
        this.data.push(record);
    }

    pop() {
        return this.data.pop();
    }

    peek() {
        // want to return the last record inside of my arry without actually removing it.
        return this.data[this.data.length - 1];
    }
}

module.exports = Stack;