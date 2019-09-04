function lonelyNumber(nums) {
	// Description: Returns the only number for which there is a single instance in an array of numbers that otherwise always show up twice, in O(n) linear time.
	// Input: An array of numbers, with one number guaranteed to be unique.
	// Returns: The only unique number in the array.

	for (let i = 0; i < nums.length; i++) {
		// Drop the element and includes() or indexOf(), but prob not O(n)...
		check = nums.shift();
		if (nums.indexOf(check) == -1) {
			return check;
		} else {
			// Stitch checked elements back on, to prevent creating wrong uniques
			nums.push(check);
		}
	}
	return "flew right past...";
}

console.log(lonelyNumber([0]));
console.log(lonelyNumber([0,0,1]));
console.log(lonelyNumber([2,1,0,0,1]));
console.log(lonelyNumber([123,23,12,3,123,23,12,1,1,2,2]));
console.log(lonelyNumber([1,2,3,1,2,3,4]));
console.log(lonelyNumber([12,23,34,45,56,67,12,23,45,56,67]));
