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
	getMax() {}
	removeMax() {}
	__percolateUp(index) {}
	__maxHeapify(index) {}
}

let heap = new maxHeap();
