# Linked Lists
### If you are going to make a collection of all the different topics.

- Linked Lists is an ordered collection of data.
- The collection of different nodes
- Each node contains some amount of data along with a reference to the next node.
- A lists of linked nodes or chain of node that are strung together
- The list of nodes that from this chain has an order that is always maintained.
- 2 special nodes (Head and Tail)
- Head node => always the very first node of linked list
- Tail node => always the very last node of linked list. The tail node can always be identified by the fact that it does not have a reference to any other node 
- Make sure Node have both propertis Data and Next

```
   Head                                                     Tail
 ____ ___        _______ ___         ________ ___        ______ ___
|"Hi"| * |  --> |"There"| * |  -->  |"How're"| * |  --> |"You?"| * |   --> null
 --------        ------- ---         -------- ---        ------ ---
   Node            Data | Reference to the Next Node


// Every single node has 2 discrete parts of it
    // 1. data bucket assigned to it (string, number, object..)
    // 2. a reference to the next node along the chain
```

### Example
```
// Create 2 separate nodes of a linked list 
// Join them together

const nodeOne = {
		data : 123
};

const nodeTwo = {
	data : 456
};

//To link them together, I have to explicitly from a reference between the two of them 
// so I can do that by writing something like 

nodeOne.next = nodeTwo;


   Head            Tail
  ____ ___        _____ ___         
| 123 | * |  --> | 456 | * | --> null
  ---  ---        ----- ---
 data  Next       data  Next

```
### So by convention we usually make sure that every node has exactly two properties the data property and the next property 