/* 
Problem Statement #
In this problem, you have to implement the findSum(arr, value) function, which takes an array arr, a number and value as input and returns an array of two numbers that add up to value.

Note: In case there is more than one pair in the array containing numbers that add up to value, you are required to return only one such pair. If no such pair found then simply return false.

Input #
An array and a number value

Output #
An array with two integers a and b ([a,b]) that add up to value

Sample Input #
arr = [1,21,3,14,5,60,7,6]
value = 81
Sample Output #
arr = [21,60]
*/

/* Solution #1: Brute Force */
/* function findSum(arr, value) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === value) {
				return [arr[i], arr[j]];
			}
		}
	}
	return false;
} */

/* Time Complexity #
Since we iterate n
n
times over the entire array of length n
n
, the time complexity is O(n^2)
O(n​2)
. */

/* Solution #3: Moving indices */
function findSum(arr, value) {
	//sort array
	//create pointer1
	//create pointer2
	//create []
	//create sum
	//loop while pointer1 !== pointer2
	//added to sum
	//if sum < value -> pointer1 ++
	//else if sum > value -> pointer2--
	//else add to arr arr[index1] && arr[index2]
	arr.sort((a, b) => a - b);
	let p1 = 0;
	let p2 = arr.length - 1;
	let result = [];
	let sum = 0;

	while (p1 !== p2) {
		sum = arr[p1] + arr[p2];
		if (sum < value) {
			p1++;
		} else if (sum > value) {
			p2--;
		} else {
			result.push(arr[p1]);
			result.push(arr[p2]);
			return result;
		}
	}

	return false;
}

console.log(findSum([1, 21, 3, 14, 5, 60, 7, 6], 81));
