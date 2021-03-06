class Node {
	constructor(item) {
		this.item = item;
		this.prev = null;
		this.next = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	insertTail(item) {
		const newNode = new Node(item);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return newNode;
	}

	getHead() {
		if (!(this.head === null)) {
			return this.head.item;
		} else {
			return null;
		}
	}

	removeHead() {
		if (this.length === 0) {
			return null;
		}

		const nodeToRemove = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = nodeToRemove.next;
			this.head.prev = null;
			nodeToRemove.next = null;
		}
		this.length--;
		return nodeToRemove.item;
	}

	firstNode() {
		if (!(this.head === null)) {
			return this.head.item;
		} else {
			return null;
		}
	}

	toString() {
		const list = [];
		let currentNode = this.head;

		while (currentNode !== null) {
			list.push(JSON.stringify(currentNode.item));
			currentNode = currentNode.next;
		}
		return list.toString();
	}
}

class Queue {
	constructor() {
		this.items = new DoublyLinkedList();
	}

	isEmpty() {
		return this.length == 0;
	}

	getFront() {
		if (!this.isEmpty()) {
			return this.items.getHead();
		}
	}

	size() {
		return this.items.length;
	}

	//Add an item to the Queue (Time complexity: O(1))
	enqueue(element) {
		return this.items.insertTail(element);
	}

	//Remove an item from the queue (Time complexity: O(1))
	dequeue() {
		return this.items.removeHead();
	}
}

class twoStacks {
	constructor(s) {
		this.arr = [];
		this.top1 = -1;
		this.top2 = s;
		this.size = s;
	}

	push1(value) {
		if (this.top1 < this.top2 - 1) {
			this.top1 += 1;
			this.arr[this.top1] = value;
		}
	}

	push2(value) {
		if (this.top1 < this.top2 - 1) {
			this.top2 -= 1;
			this.arr[this.top2] = value;
		}
	}

	pop1() {
		if (this.top1 >= 0) {
			let value = this.arr[this.top1];
			this.top1 -= 1;
			return value;
		} else {
			return -1;
		}
	}

	pop2() {
		if (this.top2 < this.size) {
			let val = this.arr[this.top2];
			this.top2 += 1;
			return val;
		} else {
			return -1;
		}
	}
}

function findBin(number) {
	let result = [];
	let myQueue = new Queue();
	let s1, s2;
	myQueue.enqueue("1");
	for (let i = 0; i < number; i++) {
		result.push(myQueue.dequeue());
		s1 = result[i] + "0";
		s2 = result[i] + "1";
		myQueue.enqueue(s1);
		myQueue.enqueue(s2);
	}

	return result;
}

let stack = new twoStacks(10);
stack.push1(20);
stack.push2(10);
stack.push1(30);
stack.push2(40);
stack.push1(60);
stack.push2(50);

let myQueue = new Queue();

/* console.log("Enqueue Elements: 2, 4, 6, 8, 10");
myQueue.enqueue(2);
myQueue.enqueue(4);
myQueue.enqueue(6);
myQueue.enqueue(8);
myQueue.enqueue(10);
console.log("You have successfully created a Queue of size: " + myQueue.size());

console.log("Dequeue(): " + myQueue.dequeue());
console.log("Dequeue(): " + myQueue.dequeue());
console.log("getFront(): " + myQueue.getFront());
console.log("getTail(): " + myQueue.getTail());
console.log("Enqueue Elements 12,14");
myQueue.enqueue(12);
myQueue.enqueue(14); */
