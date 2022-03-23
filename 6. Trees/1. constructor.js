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

	postOrderPrint(currentNode) {
		//if the currentNode IS NOT EQUAL to null
		if (currentNode !== null) {
			//make recursive call to the left subtree
			this.postOrderPrint(currentNode.leftChild);
			//make recursive call to the right subtree
			this.postOrderPrint(currentNode.rightChild);
			//print its value
			console.log(currentNode.val);
		}
		//if the currentNode IS EQUAL to null, then
		//we simply return from the function
	}

	search(value) {
		//let's start with the root
		let currentNode = this.root;
		while (currentNode && currentNode.val !== value) {
			//the loop will run until the currentNode is not null
			//and until we get to our value
			if (value < currentNode.val) {
				//traverse to the left subtree
				currentNode = currentNode.leftChild;
			} else {
				//traverse to the right subtree
				currentNode = currentNode.rightChild;
			}
		}
		//after the loop, we'll have either the searched value
		//or null in case the value was not found
		return currentNode;
	}

	delete(currentNode, value) {
		//case 1: checking for the empty tree
		//if rootNode equals NULL
		if (currentNode == null) {
			return false;
		}

		//start traversing the tree
		//until we find the value to be deleted
		//or end up with a null node
		let parentNode;
		while (currentNode && currentNode.val !== value) {
			if (value < currentNode.val) {
				currentNode = currentNode.leftChild;
			} else {
				currentNode = currentNode.rightChild;
			}
		}

		//case 2: currentNode id equal to null. Value not founf
		if (currentNode === null) {
			return false;
		} else if (
			currentNode.leftChild === null &&
			currentNode.rightChild == null
		) {
			//case 3: CurrentNode is a leaf node
			//i.e. right and left EQUAL to null
			//now checking if the node to be deleted
			//is a left or a right child of its parent or if it's the root
			if (currentNode.val == this.root.val) {
				this.root = null;
				return true;
			} else if (currentNode.val < parentNode.val) {
				parentNode.leftChild = null;
				return true;
			} else {
				parentNode.rightChild = null;
				return true;
			}
		} else if (currentNode.rightChild == null) {
			//if the node to be deleted has a left child only, we'll link the left child to the parent of the node to be deleted
			if (currentNode.val == this.root.val) {
				this.root = currentNode.leftChild;
				return true;
			} else if (currentNode.leftChild.val < parentNode.val) {
				parentNode.leftChild = currentNode.leftChild;
				return true;
			} else {
				parentNode.rightChild = currentNode.leftChild;
				return true;
			}
		}
	}
}

function findMin(rootNode) {
	if (rootNode == null) {
		return null;
	}
	while (rootNode.leftChild) {
		rootNode = rootNode.leftChild;
	}
	return rootNode.val;
}

function findkthMax(rootNode, k) {
	let tree = [];
	tree = inOrderTraverse(rootNode, tree);
	console.log(tree);
	if (tree.length - k >= 0 && k > 0) {
		return tree[tree.length - k];
	}
	return null;
}

function inOrderTraverse(rootNode, tree) {
	if (rootNode !== null) {
		tree = inOrderTraverse(rootNode.leftChild, tree);
		tree.push(rootNode.val);
		tree = inOrderTraverse(rootNode.rightChild, tree);
	}
	return tree;
}

const BST = new BinarySearchTree(6);
BST.insert(1);
BST.insert(133);
BST.insert(12);
console.log(findkthMax(BST.root, 3));
//console.log("The root val for BST : ", BST.root.val);
/* BST.insert(4);
BST.insert(9);
BST.insert(5);
BST.insert(2);
BST.insert(8);
BST.insert(12);
BST.inOrderPrint(BST.root);
console.log("Delete 12!");
console.log(BST.delete(BST.root, 12));
BST.inOrderPrint(BST.root);
 */
//console.log("Deleting from an empty tree : ", BST.delete(BST.root, 6));
