function reverseOnlyAlphabetical(str) {
	// Desc: Reverse a string, leaving non-alpha chars in place.
	// Params: Takes one string as input, to be non-alpha reversed.
	// Returns: Non-alpha reversed version of the input string.
	// NOTE: JS Strings are immutable; must use an array or similar.
	arr = str.split('');
	xA = 0;
	xZ = arr.length - 1;
	while (xA < xZ) {
		// console.log("Comparing " + arr[xA] + " and " + arr[xZ]);
		if (isAlpha(arr[xA])) {
			if (isAlpha(arr[xZ])) {
				// both are alpha, swap
				[arr[xA], arr[xZ]] = [arr[xZ], arr[xA]];
				xA++;
				xZ--;
			}
			else {
				xZ--;
			}
		}
		else {
			xA++;
		}
		// console.log("Result: " + arr.join(''));
	}
	return arr.join('');
}

function isAlpha(chr) {
	// Desc: Takes a single character as input and returns true if it is in the standard a-zA-Z alphabet.
	// Params: A single character.
	// Returns: true if the characters is in the alphabet (a-zA-Z), false otherwise.
	const alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
	chr = chr.toLowerCase();
	if (alphabetLower.includes(chr)) {
		return true;
	}
}

console.log(reverseOnlyAlphabetical('sea!$hells3'));
console.log(reverseOnlyAlphabetical('dog'));
console.log(reverseOnlyAlphabetical(''));
console.log(reverseOnlyAlphabetical('!@#$%^&*()\''));
console.log(reverseOnlyAlphabetical(' _123_CAPITAL&lowercaseMiXeD$$$   ...yep.'));
console.log(reverseOnlyAlphabetical('a'));
console.log(reverseOnlyAlphabetical('ab'));
console.log(reverseOnlyAlphabetical('abc'));
console.log(reverseOnlyAlphabetical('abcd'));
console.log(reverseOnlyAlphabetical('abcde'));
console.log(reverseOnlyAlphabetical('abcdef'));
