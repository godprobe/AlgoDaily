function fizzBuzz(n) {
	// Desc: Takes an integer input n, counts from 1 to n, and displays 'fizz' if the number is divisible by three, 'buzz' if the number is divisible by five, and the number itself if it is not divisible by either.
	// Input: n, an integer
	// Returns: a string of numbers, fizzes, and buzzes (no whitespace)
	// TODO: build the result with an array instead of appending to a string
	// Complexity: O(n)
	result = '';
	if (n == 0) {
		return '';
	}
	for (i=1; i <= n; i++) {
		addon = i;
		if (!(i % 3)) {addon = ''; result += 'fizz'}
		if (!(i % 5)) {addon = ''; result += 'buzz'}
		result += addon;
	}
	return result;
}

console.log("\r\nTest cases:");
console.log("Expect fizzBuzz(0) to equal \'\'");
console.log(fizzBuzz(0));
console.log("Expect fizzBuzz(1) to equal \'1\'");
console.log(fizzBuzz(1));
console.log("Expect fizzBizz(15) to equal \'12fizz4buzzfizz78fizzbuzz11fizz1314fizzbuzz\'");
console.log(fizzBuzz(15));

console.log("\r\nAdditional test case(s):");
console.log(fizzBuzz(50));
