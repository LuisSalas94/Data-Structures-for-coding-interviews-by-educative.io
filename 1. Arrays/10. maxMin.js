function maxMin(arr) {
	let p1 = 0;
	let p2 = arr.length - 1;
	let result = [];
	while (p1 <= p2) {
		result.push(arr[p2]);
		p2--;
		result.push(arr[p1]);
		p1++;
	}
	result.pop();
	return result;
}

console.log(maxMin([1, 2, 3, 4, 5, 6, 7]));
