/* 
Problem Statement #
Implement a function removeEven(arr), which takes an array arr in its input and removes all the even elements from a given array.

Input #
An array with random integers.

Output #
An array with only odd integers

Sample Input #
[1,2,4,5,10,6,3]
Sample Output #
[1,5,3]
*/

/* Solution #2: Using filter() and lambda function */
/* function removeEven(arr) {
	const newArr = [...arr];
	return newArr.filter((num) => num % 2 !== 0);
} */

/* Solution 1: Doing it “by hand” */
function removeEven(arr) {
	let odds = [];
	for (const num of arr) {
		if (num % 2 !== 0) {
			odds.push(num);
		}
	}
	return odds;
}

console.log(removeEven([1, 2, 4, 5, 10, 6, 3]));
