/* 
Problem Statement #
Implement a function that merges two sorted arrays into another sorted array. Name it mergeArrays(arr1, arr2).

Input: #
Two sorted arrays.

Output: #
A merged sorted array consisting of all elements of both input arrays.

Sample Input #
arr1 = [1,3,4,5]  
arr2 = [2,6,7,8]
Sample Output #
arr = [1,2,3,4,5,6,7,8]
*/

/* Solution #1: Using the spread operator */
function mergeArrays(arr1, arr2) {
	return [...arr1, ...arr2].sort((a, b) => a - b);
}

/* Time Complexity #
The time complexity for this solution will be O(n log n )O(nlogn) since we are using the sort() function. */

/* Solution #2: Creating a new array */
//Traverse both arrays and insert smaller value from arr1 or arr2
//into result array and then increment that array index.
//If an array is completely traversed, while other one is left then just
//copy all the remaining elements into result array
function mergeArrays(arr1, arr2) {
	let merged = [];
	let i = 0,
		j = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			merged.push(arr1[i]);
			i++;
		} else {
			merged.push(arr2[j]);
			j++;
		}
	}

	const lastArr1Index = arr1.length - 1;
	const lastArr2Index = arr2.length - 1;

	if (i < lastArr1Index) {
		arr1.splice(0, i);
		merged = merged.concat(arr1);
	} else if (j < lastArr2Index) {
		arr2.splice(0, j);
		merged = merged.concat(arr2);
	}

	merged;
}
console.log(mergeArrays([1, 3, 4, 5], [2, 6, 7, 8]));
