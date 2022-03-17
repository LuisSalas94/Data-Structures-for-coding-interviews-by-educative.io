class Stack {
	constructor() {
		this.items = [];
		this.top = null;
	}

	getTop() {
		if (this.items.length == 0) {
			return null;
		}
		return this.top;
	}

	isEmpty() {
		return this.items.length == 0;
	}

	size() {
		return this.items.length;
	}

	push(element) {
		this.items.push(element);
		this.top = element;
	}

	pop() {
		if (this.items.length != 0) {
			if (this.items.length == 1) {
				this.top = null;
				return this.items.pop();
			} else {
				this.top = this.items[this.items.length - 2];
				return this.items.pop();
			}
		} else {
			return null;
		}
	}
}

let myStack = new Stack();

for (let i = 0; i < 5; i++) {
	myStack.push(i);
}

console.log("Is stack empty: " + myStack.isEmpty());
console.log("Top element: " + myStack.getTop());

/* for (let i = 0; i < 5; i++) {
	console.log("Element popped: " + myStack.pop());
	console.log("Top: " + myStack.getTop());
}

console.log("Is stack empty: " + myStack.isEmpty());
console.log("Top element: " + myStack.getTop());
 */
