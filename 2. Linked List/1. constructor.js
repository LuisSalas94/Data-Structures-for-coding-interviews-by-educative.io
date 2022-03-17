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

	deleteVal(value) {
		//if list is empty return false
		if (this.isEmpty()) {
			return false;
		}

		//else get pointer to head
		let currentNode = this.head;
		// if first node's is the node to be deleted, delete it and return true
		if (currentNode.data === value) {
			this.head = currentNode.nextElement;
			return true;
		}

		//else traverse the list
		while (currentNode.nextElement !== null) {
			// if a node whose next node has the value as data, is found, delete it from the list and return true
			if (currentNode.nextElement.data == value) {
				currentNode.nextElement = currentNode.nextElement.nextElement;
				return true;
			}
			currentNode = currentNode.nextElement;
		}

		//else node was not found, return false
		return false;
	}

	deleteAtTail() {
		//check for the case when linked list is empty
		if (this.isEmpty()) {
			return this;
		}

		//if linked list is not empty, get the pointer to first node
		let firstNode = this.head;
		//check for corner case when linked list has only one element
		if (firstNode.nextElement == null) {
			this.deleteAtHead();
			return this;
		}
		//otherwise traverse to reach second last node
		while (firstNode.nextElement.nextElement !== null) {
			firstNode = firstNode.nextElement;
		}
		//since you have reached second last node, just update its nextElement pointer to point at null, skipping the last node
		firstNode.nextElement = null;
		return this;
	}

	length() {
		let count = 0;
		let currentNode = this.head;
		while (currentNode !== null) {
			count++;
			currentNode = currentNode.nextElement;
		}
		return count;
	}

	setHead(newHead) {
		this.head = newHead;
		return this;
	}

	getHead() {
		return this.head;
	}
}

function reverse(list) {
	let previousNode = null;
	let currentNode = list.getHead();
	let nextNode = null;
	//reversal
	while (currentNode !== null) {
		nextNode = currentNode.nextElement;
		currentNode.nextElement = previousNode;
		previousNode = currentNode;
		currentNode = nextNode;
	}

	list.setHead(previousNode);
}

function detectLoop(list) {
	let oneStep = list.getHead();
	let twoStep = list.getHead();

	while (oneStep != null && twoStep != null && twoStep.nextElement != null) {
		oneStep = oneStep.nextElement;
		twoStep = twoStep.nextElement.nextElement;
		//loop exists
		if (oneStep == twoStep) {
			return true;
		}
	}
	return false;
}

function findMid(list) {
	let midNode = null;
	let length = 0;
	let tempNode = list.getHead();

	while (tempNode !== null) {
		tempNode = tempNode.nextElement;
		length++;
	}

	let middle = Math.ceil(length / 2);

	midNode = list.getHead();

	for (let i = 1; i < middle; i++) {
		midNode = midNode.nextElement;
	}

	return midNode;
}

function removeDuplicates(list) {
	if (list.isEmpty()) {
		return null;
	}

	//if list has one node, leave it unchanged
	if (list.getHead().nextElement == null) {
		return list;
	}

	let outerNode = list.getHead();
	while (outerNode !== null) {
		//iterator for the inner loop
		let innerNode = outerNode;
		//duplicate found ahead
		while (innerNode !== null) {
			if (
				innerNode.nextElement !== null &&
				outerNode.data == innerNode.nextElement.data
			) {
				innerNode.nextElement = innerNode.nextElement.nextElement;
			} else {
				innerNode = innerNode.nextElement;
			}
		}
		outerNode = outerNode.nextElement;
	}

	return list;
}

function union(list1, list2) {
	if (list1.isEmpty()) {
		return list2;
	} else if (list2.isEmpty()) {
		return list1;
	}

	let start = list1.getHead();

	//Traverse the first list till the tail
	while (start.nextElement != null) {
		start = start.nextElement;
	}

	//Link last element of first list to the first element of second list
	start.nextElement = list2.getHead();
	removeDuplicates(list1);

	return list1;
}

function intersection(list1, list2) {
	let result = new LinkedList();
	let t1 = list1.getHead();
	let t2 = list2.getHead();

	while (t1 !== null) {
		while (t2 !== null) {
			if (t1.data == t2.data) {
				result.insertAtHead(t1.data);
			}
			t2 = t2.nextElement;
		}
		t2 = list2.getHead();
		t1 = t1.nextElement;
	}

	removeDuplicates(result);
	return result;
}

function findNth(list, n) {
	let nthNode = null;
	let length = 0;
	let tempNode = list.getHead();

	while (tempNode != null) {
		tempNode = tempNode.nextElement;
		length++;
	}

	length;

	let nthPos = length - n;

	if (nthPos < 0 || nthPos > length) {
		return null;
	}

	nthNode = list.getHead();

	for (let i = 0; i < nthPos; i++) {
		nthNode = nthNode.nextElement;
	}

	return nthNode;
}

let l1 = new LinkedList();
l1.insertAtHead(54);
l1.insertAtHead(89);
l1.insertAtHead(11);
l1.insertAtHead(40);
l1.insertAtHead(23);

findNth(l1, 3);
