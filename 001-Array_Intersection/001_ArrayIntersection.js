function intersection(nums1, nums2) {
	// Summary: Returns a single array containing each element
	//          shared between two input arrays, once per element.
	// Parameters:
	// 	nums1 (array) assumed to be an integer array from the examples
	// 	nums2 (array) assumed to be an integer array from the examples
	// Returns:
	// 	result (array) unique values shared by both input arrays
	// Complexity: O(n^2)

	// TODO check the official solution and very likely optimize this code!

	result = [];
	for (i = 0; i < nums1.length; i++) {
		for (j = 0; j < nums2.length; j++) {
			if (nums1[i] == nums2[j] && result.indexOf(nums1[i]) == -1) {
				result.push(nums1[i]);
			}
		}
	}
	return result.toString();
}

/* Examples */
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log(intersection(nums1, nums2));
// [2]

const nums3 = [4,9,5];
const nums4 = [9,4,9,8,4];
console.log(intersection(nums3, nums4));
// [9, 4]
