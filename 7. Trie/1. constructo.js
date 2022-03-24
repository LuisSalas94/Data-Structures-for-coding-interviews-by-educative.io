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
}

let trieNode = new TrieNode("a");
let t = new Trie();
console.log(t.getIndex("b"));
