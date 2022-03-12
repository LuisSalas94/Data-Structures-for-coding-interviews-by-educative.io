/* function findSecondMaximum(arr) {
	const uniqueArr = Array.from(new Set([...arr]));
	uniqueArr.sort((a, b) => a - b);
	uniqueArr.pop();
	return uniqueArr.pop();
} */

//Solution #1 Sort and Index
/* function findSecondMaximum(arr) {
	arr.sort((a, b) => a - b);
	return arr.length >= 2 ? arr[arr.length - 2] : null;
} */
/* Note: This solution won’t work accurately if there are duplicate values in an array. */

//Solution #1 Sort and Index
function findSecondMaximum(arr) {
	let firstMax = Number.NEGATIVE_INFINITY;
	let secondMax = Number.NEGATIVE_INFINITY;

	for (let num of arr) {
		if (num > firstMax) {
			firstMax = num;
		}
	}

	for (let num of arr) {
		if (num < firstMax && num > secondMax) {
			secondMax = num;
		}
	}

	return secondMax;
}

console.log(findSecondMaximum([2, 3, 3, 3, 3, 3]));
