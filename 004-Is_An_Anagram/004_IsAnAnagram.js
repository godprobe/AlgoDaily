function isAnagram(str1, str2) {
	// Desc: returns true if two string inputs are anagrams, false otherwise
	// Input: str1 and str2 are strings to be compared
	// Return: true or false, depending on whether or not inputs are anagrams
	// TODO: test if running a for loop on the sorted array reduces overhead
	// TODO: check official solution
	return str1.toLowerCase().split('').sort().toString() == str2.toLowerCase().split('').sort().toString();
}

console.log(isAnagram("CiNeMa", "ICEman"));
console.log(isAnagram("break", "beaker"));
console.log(isAnagram("",""));
console.log(isAnagram("wave","wav"));
console.log(isAnagram("ave","wave"));
