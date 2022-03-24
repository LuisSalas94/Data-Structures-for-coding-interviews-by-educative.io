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
}

/* let trieNode = new TrieNode("a"); */
//Input keys (use only "a" through "z" and lower case)
let keys = ["the", "a", "there", "answer", "any", "by", "bye", "their", "abc"];
let t = new Trie();
console.log("Keys to insert: ");
console.log(keys);
//Construct Trie
for (let i = 0; i < keys.length; i++) {
	t.insert(keys[i]);
}
