// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    let slow = list.getFirst(); // or list.head()
    let fast = list.getFirst();

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }
    return false;
}

module.exports = circular;



/*

    ____ ___        _______ ___         ________ ___        ______ ___
    |"Hi"| * |  --> |"There"| * |  -->  |"How're"| * |  --> |"You?"| * | --|  
    --------        ------- ---         -------- ---        ------ ---     |      
    data Next          data Next           data   Next        data  Next   |
                                                    ^                      |
                                                    |______ ___    <-------|  
                                                    | 123 | * |  
                                                    -----  ---        
                                                    data  Next      

we make the two separate variables and we advanced them both forward one at one time the other at two at a time and then we compare the value between the two of them at every step along the way.



* iterate through while loop 
so long as the next value of Fast and the one after that are not equal to null.

Next a fast.next.next are ever equal to null.

That means that this linked list does have an end to it.

And so it is not circular.

*/