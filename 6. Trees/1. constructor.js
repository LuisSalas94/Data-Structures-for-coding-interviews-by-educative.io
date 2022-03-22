class Node {
	constructor(value) {
		this.val = value;
		this.leftChild = null;
		this.rightChild = null;
	}
}

/* let myNode = new Node(6);
console.log("Value of myNode: ", myNode.val);
myNode.leftChild = new Node(5);
myNode.rightChild = new Node(7);

console.log("Value of myNode.leftChild: ", myNode.leftChild.val);
console.log("Value of myNode.rightChild: ", myNode.rightChild.val); */

class BinarySearchTree {
	constructor(rootValue) {
		this.root = new Node(rootValue);
	}

	insert(newValue) {
		if (this.root === null) {
			this.root = new Node(newValue);
			return;
		}
		//starting from the root
		let currentNode = this.root;
		let parent;
		//while we get to the null node
		while (currentNode) {
			//update the parent
			parent = currentNode;
			if (newValue < currentNode.val) {
				//if newValue < parent.val
				//insert into the leftChild
				parent.leftChild = new Node(newValue);
			} else {
				//if newValue >= parent.val
				//insert into the rightChild
				parent.rightChild = new Node(newValue);
			}
		}
	}
}

const BST = new BinarySearchTree(8);
