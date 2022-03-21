class Node {
	constructor(value) {
		this.val = value;
		this.leftChild = null;
		this.rightChild = null;
	}
}

let myNode = new Node(6);
console.log("Value of myNode: ", myNode.val);
myNode.leftChild = new Node(5);
myNode.rightChild = new Node(7);

console.log("Value of myNode.leftChild: ", myNode.leftChild.val);
console.log("Value of myNode.rightChild: ", myNode.rightChild.val);

class BinarySearchTree {
	constructor(rootValue) {
		this.root = new Node(rootValue);
	}
}

let BST = new BinarySearchTree(8);
console.log("The root val for BST: ", BST.root.val);
