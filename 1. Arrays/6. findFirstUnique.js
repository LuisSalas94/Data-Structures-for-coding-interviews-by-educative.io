function findFirstUnique(arr) {
	let arrObj = {};
	let arr2 = [];

	for (let num of arr) {
		arrObj[num] ? arrObj[num]++ : (arrObj[num] = 1);
	}

	for (let num in arrObj) {
		if (arrObj[num] === 1) {
			arr2.push(+num);
		}
	}

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			if (arr[i] === arr2[j]) {
				return arr[i];
			}
		}
	}
}

console.log(findFirstUnique([4, 5, 1, 2, 0, 4]));
