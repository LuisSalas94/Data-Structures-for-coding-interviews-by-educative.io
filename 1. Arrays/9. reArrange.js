/* function reArrange(arr) {
	const positives = arr.filter((num) => num >= 0);
	const negatives = arr.filter((num) => num < 0);
	return [...negatives, ...positives];
} */

function reArrange(arr) {
	const positives = [];
	const negatives = [];

	for (let num of arr) {
		num < 0 ? negatives.push(num) : positives.push(num);
	}

	return [...negatives, ...positives];
}

console.log(reArrange([10, -1, 20, 4, 5, -9, -6]));
