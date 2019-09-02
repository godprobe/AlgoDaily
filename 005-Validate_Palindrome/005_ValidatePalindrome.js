function isPalindrome(str) {
	// Desc: Determine whether or not an input string is a palindrome,
	//       disregarding non-alphanumeric characters.
	// Input: str is a string of characters
	// Returns: true if input is a palindrome, false if not
	// NOTE: may not work with newlines, or recognize formatting (untested)

	result = str.replace(/[^0-9a-z]/gi,'').toLowerCase();
	tluser = reverseString(result);

	return result == tluser;
}

function reverseString(str) {
	strArr = str.split('');
	head = 0;
	tail = strArr.length;
	while (head < tail) {
		// swap head and tail
		[strArr[head], strArr[tail]] = [strArr[tail], strArr[head]];
		head++;
		tail--;
	}
	return strArr.join('');
}

console.log(isPalindrome('test'));
console.log(isPalindrome('Madam, I\'m Adam!'));
console.log(isPalindrome('$1,055.01'));
console.log(isPalindrome('TACOCAT'));
