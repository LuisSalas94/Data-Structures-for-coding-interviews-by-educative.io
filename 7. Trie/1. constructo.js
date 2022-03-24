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
}

/* let trieNode = new TrieNode("a"); */
//Input keys (use only "a" through "z" and lower case)
let keys = ["the", "a", "there", "answer", "any", "by", "bye", "their", "abc"];
let output = ["Not present in the trie", "Present in the trie"];
let t = new Trie();
console.log("Keys to insert: ");
console.log(keys);
//Construct Trie
for (let i = 0; i < keys.length; i++) {
	t.insert(keys[i]);
}

//Search for different keys
if (t.search("the") == true) console.log("the --- " + output[1]);
else console.log("the --- " + output[0]);

if (t.search("these") == true) console.log("these --- " + output[1]);
else console.log("these --- " + output[0]);

if (t.search("abc") == true) console.log("abc --- " + output[1]);
else console.log("abc --- " + output[0]);
