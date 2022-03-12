/*
We will first create a new array product to store the products of elements. Then, we will traverse the arr and store the product of all the numbers to the left side of the current element in product[i] as on line 5. We will also calculate the product of all the elements from index 0 to the current index i for the next iteration and store it in temp line 6 (It will be a product of all the numbers on the left for an element at index i+1).

Now we will traverse the arr from the end and multiply the product of all the numbers to the right side of the current element with product[i]( product of all the numbers to the left side of current element) as on line 11. We will also calculate the product of all the elements from index length-1 to the current index i for the next iteration and store it in temp line 12 (It will be a product of all the numbers on the right for an element at index i-1).

Time Complexity#
Since this algorithm only traverses over the array twice so the complexity expression is n + n
n+n, and the final term becomes O(n).
*/

function findProduct(arr) {
	let temp = 1;
	let product = [];

	for (let i = 0; i < arr.length; i++) {
		product[i] = temp;
		temp = temp * arr[i];
	}

	temp = 1;

	for (let i = arr.length - 1; i > -1; i--) {
		product[i] = product[i] * temp;
		temp = temp * arr[i];
	}

	return product;
}

console.log(findProduct([1, 3, 4, 5]));
