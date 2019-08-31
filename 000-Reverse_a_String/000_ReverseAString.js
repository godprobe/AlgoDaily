function reverseString(s) {
	// reverseString() reverses a string ("string" becomes "gnirts").
	// Inputs: (string) s is the string to be reversed.
	// Returns: the reversed string.
	// TODO use an assert here instead
	// TODO refactor/optimize for algorithmic complexity
	// Current complexity: O(n)

	if (typeof s == 'string') {
		r = "";
		for (i = s.length; i >= 0; i--) {
			r += s.charAt(i);
		}
		return r;
	} else {
		return "Error: expected a string as input.";
	}
}

console.log(reverseString("This is a test!"));
