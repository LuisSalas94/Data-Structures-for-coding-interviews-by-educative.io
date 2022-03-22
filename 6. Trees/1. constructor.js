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

	preOrderPrint(currentNode) {
		//if the currentNode IS NOT EQUAL TO NULL
		if (currentNode !== null) {
			//print its value
			console.log(currentNode.val);
			//make recursive call to the left subtree
			this.preOrderPrint(currentNode.leftChild);
			//make recursive call to the right subtree
			this.preOrderPrint(currentNode.rightChild);
		}
		//if the currentNode IS EQUEAL to null, then
		//we simply return
	}

	inOrderPrint(currentNode) {
		//if the currrentNODE IS NOT EQUAL TO NULL
		if (currentNode !== null) {
			//make recursive call to the left subtree
			this.inOrderPrint(currentNode.leftChild);
			//print the value of the currentNode
			console.log(currentNode.val);
			//make recursive call to the right subtree
			this.inOrderPrint(currentNode.rightChild);
		}
		//if the currentNode IS EQUEAL to null, then
		//we simply return
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

BST.preOrderPrint(BST.root);
