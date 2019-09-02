function powerOfThree(num) {
	// Desc: Returns true if input value 'num' is a power of 3, false otherwise.
	// TODO: Definitely check for the most efficient ways to do this.
	// NOTE: Dictionary lookup probably faster for expected common inputs.
	if (num < 0) {return false};
	if (num == 0) {return true};
	
	// Brute force for now...
	guess = 0;
	while (guess <= num) {
		if (guess ** 3 < num) {
			guess++;
		} else if (guess ** 3 === num) {
			return true;
		} else { // guess ** 3 > num
			return false;
		}
	}
	// just in case we impossibly made it out of the while loop...
	return false;

	// guess**3 > num --> guess-- (or decrease a different way)
	// guess**3 < num --> guess++ (or increase a different way)
	// guess**3 == num --> return true
	//
	// ping-pong between a head and a tail guess?
	// need to discover most efficient way of making a new guess
}

console.log(powerOfThree(0)); // true 0^3
console.log(powerOfThree(1)); // true 1^3
console.log(powerOfThree(2)); // false
console.log(powerOfThree(3)); // false
console.log(powerOfThree(8)); // true 2^3
console.log(powerOfThree(27)); // true 3^3
console.log(powerOfThree(-27)); // false (negative)
console.log(powerOfThree(970298)); // false
console.log(powerOfThree(970299)); // true (9^3)
