class TrieNode {
	constructor(char) {
		this.children = [];
		//total # of English Alphabets
		for (let i = 0; i < 26; i++) {
			this.children[i] = null;
		}
		//will be true if the node represents the end of word
		this.isEndWord = false;
		//To store the value of a particular key
		this.char = char;
	}

	//Function to mark the currentNode as Leaf
	markAsLeaf() {
		this.isEndWord = true;
	}

	//Function to unMark the currentNode as Leaf
	unMarkLeaf() {
		this.isEndWord = false;
	}
}

class Trie {
	constructor() {
		//Root node
		this.root = new TrieNode("");
	}

	//The charCodeAt() function returns the order of a given character
	getIndex(t) {
		return t.charCodeAt(0) - "a".charCodeAt(0);
	}

	//Function to insert a key, value pair int he Trie
	insert(key, value) {
		return null;
	}

	//Function to search for a given key in the Trie
	search(key) {
		return false;
	}

	//Function to delete a given key from the Trie
	delete(key) {
		return null;
	}

	//Function to insert a key in the Trie
	insert(key) {
		//None keys are not allowed
		if (key == null) {
			return;
		}
		//Keys are stored in lowercase
		key = key.toLowerCase();
		let currentNode = this.root;
		//to store the character index
		let index = 0;

		//Iterate the trie with the given character index,
		//If the index points to null
		//simply create a Trienode and go down a level
		for (let level = 0; level < key.length; level++) {
			index = this.getIndex(key[level]);
			if (currentNode.children[index] == null) {
				currentNode.children[index] = new TrieNode(key[level]);
				console.log(String(key[level]) + " inserted");
			}
			currentNode = currentNode.children[index];
		}

		//Mark the end character as leaf node
		currentNode.markAsLeaf();
		console.log("'" + key + "' inserted");
	}

	//Function to search a given key in Trie
	search(key) {
		if (key == null) {
			return false;
		}
		key = key.toLowerCase();
		let currentNode = this.root;
		let index = 0;
		//Iterate the Trie with given character index,
		//If it is null at any point then we stop and return false
		//We will return true only if we reach leafNode and have traversed the
		//Trie based on the length of the key
		for (let level = 0; level < key.length; level++) {
			index = this.getIndex(key[level]);
			if (currentNode.children[index] == null) {
				return false;
			}
			currentNode = currentNode.children[index];
		}

		if (currentNode != null && currentNode.isEndWord) {
			return true;
		}
		return false;
	}

	//Helper Function to return true if currentNode does not have any children
	hasNoChildren(currentNode) {
		for (var i = 0; i < currentNode.children.length; i++) {
			if (currentNode.children[i] != null) return false;
		}
		return true;
	}

	//Recursive function to delete given key
	deleteHelper(key, currentNode, length, level) {
		let deletedSelf = false;

		if (currentNode == null) {
			console.log("Key does not exist");
			return deletedSelf;
		}

		//Base Case: If we have reached at the node which points to the alphabet at the end of the key.
		if (level == length) {
			//If there are no nodes ahead of this node in this path
			//Then we can delete this node
			if (this.hasNoChildren(currentNode)) {
				currentNode = null;
				deletedSelf = true;
			}

			//If there are nodes ahead of currentNode in this path
			//Then we cannot delete currentNode. We simply unmark this as leaf
			else {
				currentNode.unMarkAsLeaf();
				deletedSelf = false;
			}
		} else {
			let childNode = currentNode.children[this.getIndex(key[level])];
			let childDeleted = this.deleteHelper(key, childNode, length, level + 1);
			if (childDeleted) {
				//Making children pointer also None: since child is deleted
				currentNode.children[this.getIndex(key[level])] = null;
				//If currentNode is leaf node that means currentNode is part of another key
				//and hence we can not delete this node and it's parent path nodes
				if (currentNode.isEndWord) deletedSelf = false;
				//If childNode is deleted but if currentNode has more children then currentNode must be part of another key
				//So, we cannot delete currenNode
				else if (this.hasNoChildren(currentNode) == false) deletedSelf = false;
				//Else we can delete currentNode
				else {
					currentNode = null;
					deletedSelf = true;
				}
			} else deletedSelf = false;
		}
		return deletedSelf;
	}

	//Function to delete given key from Trie
	delete(key) {
		if (this.root == null || key == null) {
			console.log("None key or empty trie error");
			return;
		}

		this.deleteHelper(key, this.root, key.length, 0);
	}
}

function totalWords(rootN) {
	let result = 0;
	//Leaf denotes end of a word
	if (rootN.isEndWord) {
		result += 1;
	}

	for (let i = 0; i < 26; i++) {
		if (rootN.children[i] != null) {
			result += totalWords(rootN.children[i]);
		}
	}
	return result;
}

//Recursive function to generate all words
function getWords(root, result, level, string) {
	//Leaf denotes end of a world
	if (root.isEndWord) {
		//current word is stored till the "level" in the character array
		let temp = "";
		for (let x = 0; x < level; x++) {
			temp += String(string[x]);
		}
		result.push(temp);
	}

	for (let i = 0; i < 26; i++) {
		if (root.children[i] != null) {
			//Non.None child, so add that index to the character array
			string[level] = String.fromCharCode(i + "a".charCodeAt(0));
			getWords(root.children[i], result, level + 1, string);
		}
	}
}

function findWords(root) {
	let result = [];
	let chararr = [];
	for (let i = 0; i < 20; i++) {
		chararr.push(null);
	}
	getWords(root, result, 0, chararr);
	return result;
}

/* let trieNode = new TrieNode("a"); */
//Input keys (use only "a" through "z" and lower case)
let keys = ["the", "a", "there", "answer", "any", "by", "bye", "their", "abc"];
let output = ["Not present in the trie", "Present in the trie"];
let t = new Trie();
for (let x = 0; x < keys.length; x++) {
	t.insert(keys[x], x);
}
console.log(findWords(t.root));

/* t.insert("data", 0);
t.insert("structures", 1);
console.log(totalWords(t.root)); */

//Construct Trie
/* for (let i = 0; i < keys.length; i++) {
	t.insert(keys[i]);
} */

//Search for different keys
/* if (t.search("the") == true) console.log("the --- " + output[1]);
else console.log("the --- " + output[0]);

if (t.search("these") == true) console.log("these --- " + output[1]);
else console.log("these --- " + output[0]);

if (t.search("abc") == true) console.log("abc --- " + output[1]);
else console.log("abc --- " + output[0]); */
