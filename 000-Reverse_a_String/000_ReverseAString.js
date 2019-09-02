function reverseString(s) {
	// reverseString() reverses a string ("string" becomes "gnirts").
	// Inputs: (string) s is the string to be reversed.
	// Returns: the reversed string.
	// TODO use an assert here instead
	// Current complexity: O(n)

	if (typeof s == 'string') {
		strArr = s.split('');
		head = 0;
		tail = strArr.length;
		while (head < tail) {
			// swap head and tail
			[strArr[head], strArr[tail]] = [strArr[tail], strArr[head]];
			head++;
			tail--;
		}
		return strArr.join('');
	} else {
		return "Error: expected a string as input.";
	}
}

console.log(reverseString("This is a test!"));
