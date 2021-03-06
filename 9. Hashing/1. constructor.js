class HashEntry {
	constructor(key, data) {
		this.key = key;
		//data to be stored
		this.value = data;
		//reference to new entry
		this.next = null;
	}
}

let threshold = 0.6;

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

	//Resize
	resize() {
		let new_slots = this.slots * 2;
		let new_bucket = [];
		for (var n = 0; n < new_slots; n++) {
			new_bucket[n] = null;
		}
		this.slots = new_slots;
		// rehash all items into new slots
		for (var i = 0; i < this.bucket.length; i++) {
			let head = this.bucket[i];
			while (head != null) {
				let new_index = this.getIndex(head.key);
				if (new_bucket[new_index] == null) {
					new_bucket[new_index] = new HashEntry(head.key, head.value);
				} else {
					let node = new_bucket[new_index];
					while (node != null) {
						if (node.key == head.key) {
							node.value = head.value;
							node = null;
						} else if (node.next == null) {
							node.next = new HashEntry(head.key, head.value);
							node = null;
						} else {
							node = node.next;
						}
					}
				}
				head = head.next;
			}
		}
		this.bucket = new_bucket;
	}

	//insertion
	insert(key, value) {
		//Find the node with the given key
		let threshold = 0.6;
		let b_Index = this.getIndex(key);
		if (this.bucket[b_Index] == null) {
			this.bucket[b_Index] = new HashEntry(key, value);
			console.log(String(key) + ", " + String(value) + " - inserted.");
		} else {
			let head = this.bucket[b_Index];
			while (head != null) {
				if (head.key == key) {
					head.value = value;
					break;
				} else if (head.next == null) {
					head.next = new HashEntry(key, value);
					console.log(String(key) + ", " + String(value) + " - inserted.");
					break;
				}
				head = head.next;
			}
		}

		this.size += 1;
		let load_factor = Number(this.size) / Number(this.slots);
		//Checks if 60% of the entries in table are filled, threshold = 0.6
		if (load_factor >= threshold) {
			this.resize();
		}
	}

	search(key) {
		//Find the node with the given key
		let b_Index = this.getIndex(key);
		let head = this.bucket[b_Index];
		//Search key in the slots
		if (head != null) {
			while (head != null) {
				if (head.key == key) {
					return head.value;
				}
				head = head.next;
			}
		}
		//If key not found
		console.log("Key not found");
		return null;
	}

	delete(key) {
		//Find index
		let b_Index = this.getIndex(key);
		let head = this.bucket[b_Index];
		//If key exists at first slot
		if (head.key == key) {
			this.bucket[b_Index] = head.next;
			console.log("Key deleted");
			this.size -= 1;
			return;
		}
		//Find the key in slots
		let prev = null;
		while (head != null) {
			//If key exists
			if (head.key == key) {
				prev.next = head.next;
				console.log("Key deleted");
				this.size -= 1;
				return;
			}
			//Else keep moving in chain
			prev = head;
			head = head.next;
		}
		//If key does not exist
		console.log("Key not found");
		return;
	}
}

function isSubset(list1, list2) {
	//if list2 has more elements than list1, it would not be the subset of list1
	if (list2.length > list1.length) {
		return false;
	}

	let ht = new HashTable();
	//Inserting list1's elements in ht
	for (let i = 0; i < list1.length; i++) {
		ht.insert(list1[i], i);
	}

	//Checking to see if all of list2's elements are in the hashtable
	for (let j = 0; j < list2.length; j++) {
		if (ht.search(list2[j] == null)) {
			//return false if there is an element is list2 not in list1
			return false;
		}
	}
	return true;
}

function isDisjoint(list1, list2) {
	let ht = new HashTable();
	//Inserting list1's elements in ht
	for (let i = 0; i < list1.length; i++) {
		ht.insert(list1[i], i);
	}

	//Checking to see if all of list2's elements are in the hashtable
	for (let j = 0; j < list2.length; j++) {
		if (ht.search(list2[j] != null)) {
			//return false if there is an element in list2 that is in list1
			return false;
		}
	}
	return true;
}

function findPair(my_list) {
	let result = [];
	//Create HashMap with Key being sum and value being a pair i.e key = 3 , value = {1,2}
	//Traverse all possible pairs in my_list and store sums in map
	//If sum already exist then print out the two pairs.
	let hMap = new HashTable();
	for (let i = 0; i < my_list.length; i++) {
		for (let j = i + 1; j < my_list[j]; j++) {
			//calculate sum
			let sum = my_list[i] + my_list[j];
			if (hMap.search(sum) == null) {
				//if sum is not present in Map then insert it alogwith pair
				hMap.insert(sum, [my_list[i], my_list[j]]);
			} else {
				//Sum already present in Map
				let prev_pair = hMap.search(sum);
				//Since array elements are distinct, We dont't need to check if any element is common among pais
				let secondPair = [my_list[i], my_list[j]];
				result.push(prev_pair);
				result.push(secondPair);
				return result;
			}
		}
	}
	return result;
}

function findSubZero(my_list) {
	//Use HashMap to store sum as key and index i as value till sum has been calculated
	//Traverse the array and return true if either
	//my_list[i] == 0 or sum == 0 or HashMap already contains the sum
	//If you completely traverse the list and havent found any of the above three
	//conditions then simply return false
	let hMap = new HashTable();
	let sum = 0;
	//Traverse throgh the given array
	for (let i = 0; i < my_list.length; i++) {
		sum += my_list[i];
		if (my_list[i] == 0 || sum == 0 || hMap.search(sum) != null) {
			return true;
		}
		hMap.insert(sum, i);
	}
	return false;
}

let list = [6, 4, -7, 3, 12, 9];
console.log(findSubZero(list));
//console.log(isDisjoint(list1, list2));

/* ht.insert(2, "London");
console.log(ht.bucket[2].value);
ht.insert(12, "Moscow");
console.log(ht.bucket[2].next.value);
console.log("Size of the array: " + String(ht.size)); */
