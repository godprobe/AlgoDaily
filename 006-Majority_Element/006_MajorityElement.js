function majorityElement(input) {
	// Description: majorityElement() takes an array of values where one value is guaranteed to have more instances than the others, and returns that value.
	// Input: A single array of values, one value is guaranteed to be more frequent than the others.
	// Returns: The value that occurs most frequently in the input array.
	let elementTotals = new Map();
	for (let i = 0; i < input.length; i++) {
		if (elementTotals.has(input[i])) {
			// add one to the item in totals
			elementTotals.set(input[i], elementTotals.get(input[i]) + 1);
		} else {
			// add new item to totals with a value of 1
			elementTotals.set(input[i], 1);
		}
	}

	let best = "No majority element!";
	let highest = 0;
	for (let [key, value] of elementTotals.entries()) {
		if (value > highest) {
			highest = value;
			best = key;
		}
	}

	return best.toString();
}

console.log(majorityElement([1,2,3,4,1,2,3,1,2,1])) // 1
console.log(majorityElement([12,34,56,34,34,34,56,56,56,12,0,34])) // 34
console.log(majorityElement([9,9,9,8,8,8,7,7,7,6,6,6,5,5,5,4,4,4,3,3,3,3])) // 3
console.log(majorityElement([0, -1, 0, 2, 0, -3, 0, 4, 0])) // 0
console.log(majorityElement(['a', 'b', 'c', 'd', 'a'])) // 'a'
console.log(majorityElement(['majority', 'minority', 'majority'])) // majority
console.log(majorityElement(['minority', 'majority', 'majority'])) // majority
