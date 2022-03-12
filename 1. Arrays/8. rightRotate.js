function rightRotate(arr, n) {
	let rotatedList = [];
	let index = arr.length - n;

	for (let i = index; i < arr.length; i++) {
		rotatedList.push(arr[i]);
	}

	for (let i = 0; i < index; i++) {
		rotatedList.push(arr[i]);
	}

	return rotatedList;
}
/* Time Complexity # Since the entire array is iterated over, the time complexity of this solution is O(n)
O(n) */

console.log(rightRotate([1, 2, 3, 4, 5], 3));
