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
		if (this.root == null) {
			this.root = new Node(newValue);
			return;
		}
		//starting from the root
		let currentNode = this.root;
		let parent;
		//while we get to the null node
		while (currentNode) {
			parent = currentNode; //update the parent
			if (newValue < currentNode.val) {
				//if newValue < currentNode.val,
				//iterate to the left subtree
				currentNode = currentNode.leftChild;
			} else {
				//if newValue >= currentNode.val,
				//iterate to the right subtree
				currentNode = currentNode.rightChild;
			}
		}
		//by now, we will have the parent of the null
		//node where we have to insert the newValue
		if (newValue < parent.val) {
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

const BST = new BinarySearchTree(6);
console.log("The root val for BST : ", BST.root.val);
BST.insert(4);
BST.insert(9);
BST.insert(5);
BST.insert(2);
BST.insert(8);
BST.insert(12);
BST.insert(10);
BST.insert(14);
