class maxHeap {
	constructor() {
		this.heap = [];
		this.elements = 0;
	}

	insert(val) {
		if (this.elements >= this.heap.length) {
			this.elements = this.elements + 1;
			this.heap.push(val);
			this.__percolateUp(this.heap.length - 1);
		} else {
			this.heap[this.elements] = val;
			this.elements = this.elements + 1;
			this.__percolateUp(this.elements - 1);
		}
	}

	getMax() {
		if (this.elements != 0) {
			return this.heap[0];
		}
		return null;
	}

	removeMax() {
		if (this.elements > 1) {
			let max = this.heap[0];
			this.heap[0] = this.heap[this.elements - 1];
			this.elements = this.elements - 1;
			this.__maxHeapify(0);
			return max;
		} else if (this.elements == 1) {
			let max = this.heap[0];
			this.elements = this.elements - 1;
			return max;
		} else {
			return null;
		}
	}

	__percolateUp(index) {
		let parent = Math.floor((index - 1) / 2);
		if (index <= 0) {
			return;
		} else if (this.heap[parent] < this.heap[index]) {
			let tmp = this.heap[parent];
			this.heap[parent] = this.heap[index];
			this.heap[index] = tmp;
			this.__percolateUp(parent);
		}
	}

	__maxHeapify(index) {
		let left = index * 2 + 1;
		let right = index * 2 + 2;
		let largest = index;
		if (this.elements > left && this.heap[largest] < this.heap[left]) {
			largest = left;
		}
		if (this.elements > right && this.heap[largest] < this.heap[right])
			largest = right;
		if (largest != index) {
			let tmp = this.heap[largest];
			this.heap[largest] = this.heap[index];
			this.heap[index] = tmp;
			this.__maxHeapify(largest);
		}
	}

	buildHeap(arr) {
		this.heap = arr;
		this.elements = this.heap.length;
		for (let i = this.heap.length - 1; i >= 0; i--) {
			this.__maxHeapify(i);
		}
	}
}

let heap = new maxHeap();
let arr = [6, 9, 3, 4, 13, 22, 1, 30, 17];
/* heap.insert(12);
heap.insert(10);
heap.insert(-10);
heap.insert(100);
console.log(heap.getMax());
heap.removeMax();
console.log(heap.getMax()); */
//heap.buildHeap(arr);
//console.log(heap.getMax());
//heap.removeMax();
//console.log(heap.getMax());

class minHeap {
	constructor() {
		this.heap = [];
		this.elements = 0;
	}

	insert(val) {
		if (this.elements >= this.heap.length) {
			this.elements = this.elements + 1;
			this.heap.push(val);
			this.__percolateUp(this.heap.length - 1);
		} else {
			this.heap[this.elements] = val;
			this.elements = this.elements + 1;
			this.__percolateUp(this.elements - 1);
		}
	}

	getMin() {
		if (this.heap.length != 0) return this.heap[0];
		return null;
	}

	removeMin() {
		if (this.elements > 1) {
			let min = this.heap[0];
			this.heap[0] = this.heap[this.elements - 1];
			this.elements = this.elements - 1;
			this.__minHeapify(0);
			return min;
		} else if (this.elements == 1) {
			let min = this.heap[0];
			this.elements = this.elements - 1;
			return min;
		} else {
			return null;
		}
	}

	__percolateUp(index) {
		let parent = Math.floor((index - 1) / 2);
		if (index <= 0) return;
		else if (this.heap[parent] > this.heap[index]) {
			let tmp = this.heap[parent];
			this.heap[parent] = this.heap[index];
			this.heap[index] = tmp;
			this.__percolateUp(parent);
		}
	}
	__minHeapify(index) {
		let left = index * 2 + 1;
		let right = index * 2 + 2;
		let smallest = index;
		if (this.elements > left && this.heap[smallest] > this.heap[left]) {
			smallest = left;
		}
		if (this.elements > right && this.heap[smallest] > this.heap[right])
			smallest = right;
		if (smallest != index) {
			let tmp = this.heap[smallest];
			this.heap[smallest] = this.heap[index];
			this.heap[index] = tmp;
			this.__minHeapify(smallest);
		}
	}

	buildHeap(arr) {
		this.heap = arr;
		this.elements = this.heap.length;
		for (let i = this.heap.length - 1; i >= 0; i--) {
			this.__minHeapify(i);
		}
	}
}

function minHeapify(heap, index) {
	var left = index * 2;
	var right = index * 2 + 1;
	var smallest = index;

	if (heap.length > left && heap[smallest] > heap[left]) {
		smallest = left;
	}
	if (heap.length > right && heap[smallest] > heap[right]) smallest = right;
	if (smallest != index) {
		var tmp = heap[smallest];
		heap[smallest] = heap[index];
		heap[index] = tmp;
		minHeapify(heap, smallest);
	}
	return heap;
}

function convertMax(maxHeap) {
	for (var i = Math.floor(maxHeap.length / 2); i > -1; i--)
		maxHeap = minHeapify(maxHeap, i);
	return maxHeap;
}

function findKSmallest(arr, k) {
	let myHeap = new minHeap();
	myHeap.buildHeap(arr);
	let kSmallest = [];

	if (k > arr.length) {
		k = arr.length;
	}

	for (let i = 0; i < k; i++) {
		kSmallest.push(myHeap.removeMin());
	}

	return kSmallest;
}

function findKLargest(lst, k) {
	var heap = new maxHeap();
	heap.buildHeap(lst);
	var kLargest = [];
	if (k > lst.length) {
		k = lst.length;
	}
	for (var i = 0; i < k; i++) kLargest.push(heap.removeMax());

	return kLargest;
}

const arr2 = [9, 4, 7, 1, -2, 6, 5];
const k = 3;
console.log(findKLargest(arr2, k));

//var maxHeap2 = [9, 4, 7, 1, -2, 6, 5];
//console.log(convertMax(maxHeap2));

/* let heap2 = new minHeap();
heap2.insert(12);
heap2.insert(10);
heap2.insert(-10);
heap2.insert(100);
console.log(heap2.getMin());

let newHeap = new minHeap();
newHeap.buildHeap(arr);
console.log(newHeap.getMin());
newHeap.removeMin();
console.log(newHeap.getMin()); */
