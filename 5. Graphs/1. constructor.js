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

class Graph {
	constructor(vertices) {
		//total number of vertices in the graph
		this.vertices = vertices;
		//Defining an array which can hold LinkedLists equal to the number of vertices in the graph
		this.list = [];
		//Creating a new LinkedList for each vertex/index of the list
		for (let i = 0; i < vertices.length; i++) {
			let temp = new LinkedList();
			this.list.push(temp);
		}
	}

	addEdge(source, destination) {
		if (source < this.vertices && destination < this.vertices) {
			//Sice we are implementing a directed list, (0,1) is not the same as (1,0)
			this.list[source].insertAtHead(destination);
			//If we were to implement an undirected graph where (0,1)==(1,0),
			//we would create an additional edge from destination to source too:
			//this.list[destination].insertAtHead(source);
		}
	}
}

let myGraph = new Graph(4);
myGraph.addEdge(0, 1);
myGraph.addEdge(0, 2);
myGraph.addEdge(1, 3);
myGraph.addEdge(2, 3);
