class HashEntry {
	constructor(key, data) {
		this.key = key;
		//data to be stored
		this.value = data;
		//reference to new entry
		this.next = null;
	}
}

class HashTable {
	constructor() {
		//Size of the Hashtables
		this.slots = 10;
		//Current entries in the table
		//Used while resizing the table when half of the table gets filled
		this.size = 0;
		//Array of Hashentryes objects (by default all None)
		this.bucket = [];
		for (let i = 0; i < this.slots; i++) {
			this.bucket[i] = null;
		}
	}

	//Hash function
	getIndex(key) {
		let index = key % this.slots;
		return index;
	}

	//Helper functions
	get_size() {
		return this.size;
	}

	isEmpty() {
		return this.get_size() === 0;
	}
}

let ht = new HashTable();
console.log(ht.isEmpty());
