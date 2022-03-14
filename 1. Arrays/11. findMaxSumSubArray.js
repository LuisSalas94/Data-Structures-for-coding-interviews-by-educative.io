/* function findMaxSubArray(arr) {
	if (arr.length < 1) {
		return 0;
	}

	let currMax = arr[0];
	let globalMax = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (currMax < 0) {
			currMax = arr[i];
		} else {
			currMax = currMax + arr[i];
		}

		if (globalMax < currMax) {
			globalMax = currMax;
		}
	}
	return globalMax;
}

console.log(findMaxSubArray([-4, 2, -5, 1, 2, 3, 6, -5, 1]));
 */

/* let arr = [
	[
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];

function foo(m) {
	let v = m[0][0];
	for (let row of m) {
		for (let element of row) {
			if (v < element) {
				v = element;
			}
		}
	}
	return v;
}

console.log(foo(arr[0])); */

/* let arr = [1, 2, 3, 4, 5, 6];
for (let i = 1; i < 6; i++) {
	arr[i - 1] = arr[i];
}

for (let i = 0; i < 6; i++) {
	console.log(arr[i]);
}
 */

let values = [];
function f(i, values) {
	values.push(i);
	console.log(values);
	return values;
}

f(1, values);
f(2, values);
f(3, values);
