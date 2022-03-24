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

let trieNode = new TrieNode("a");
