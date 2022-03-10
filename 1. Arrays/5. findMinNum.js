/* function findMinNum(arr) {
	let min = arr[0];

	for (const num of arr) {
		if (num < min) return (min = num);
	}

	return min;
} */
/* 
Time Complexity #
Since most popular sort functions are in O(nlogn)
O(nlogn)
, let’s assume that the JavaScript sort function is too. Since we only return first value from an array so it will take constant time operation. Therefore, overall this solution will take O(nlogn)
O(nlogn)  time.
*/

function findMinNum(arr) {
	arr.sort((a, b) => a - b);
	return arr[0];
}
/* Time Complexity #
Since the entire array is iterated over once, this algorithm is in linear time, O(n)
O(n)
. */

console.log(findMinNum([9, 2, 3, 6]));
