// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}
	insertFirst(data) {
		const node = new Node(data, this.head);
		this.head = node;
	}
	size() {
		let counter = 0;
		let node = this.head;

		while (node) {
			counter++;
			node = node.next;
		}
		return counter;
	}
}

module.exports = {
	Node,
	LinkedList
};

/*
Example


class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(data) {
        const node = new Node(data, this.head);
        this.head = node;
    }
}

const nodeOne = new Node(5);
const list = new LinkedList();
list.head = nodeOne;
list.insertFirst(15);
list


result:
{"data":5,"next":null}
{"head":{"data":15,"next":{"data":5,"next":null}}}

*/
