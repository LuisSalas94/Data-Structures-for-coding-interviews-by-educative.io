class Node {
	constructor(data) {
		this.data = data;
		this.nextElement = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	isEmpty() {
		return this.head == null;
	}

	insertAtHead(newData) {
		let tempNode = new Node(newData);
		tempNode.nextElement = this.head;
		this.head = tempNode;
		return this;
	}

	insertAtTail(newData) {
		//create new node
		let node = new Node(newData);
		//check for case when list is empty
		if (this.isEmpty()) {
			this.head = node;
			return this;
		}
		//start from head
		let currentNode = this.head;
		//iterate to the last element
		while (currentNode.nextElement !== null) {
			currentNode = currentNode.nextElement;
		}
		//make new node the nextElement of last node of list
		currentNode.nextElement = node;
		return this;
	}

	search(value) {
		//start from the fist element
		let currentNode = this.head;
		//traverse list until you find the value or reach the end
		while (currentNode !== null) {
			if (currentNode.data == value) {
				return true;
			}
			currentNode = currentNode.nextElement;
		}
		return false;
	}

	deleteAtHead() {
		//if list is empty, do nothing
		if (this.isEmpty()) {
			return this;
		}
		//get the head and first element of the list
		let firstElement = this.head;
		//if list is not empty, link head to the nextElement of firstElement
		this.head = firstElement.nextElement;
		return this;
	}

	getHead() {
		return this.head;
	}
}

let list = new LinkedList();
for (let i = 0; i < 10; i++) {
	list = list.insertAtHead(i);
}
