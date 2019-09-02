/* TODO: research what a hash map is actually supposed to be
 * TODO: figure out what I'm supposed to be doing with this hashing function
 * TODO: probably just add in a hash somewhere, and use *that* to do the lookup
 * TODO: optimize?
 * TODO: definitely check the solution because the instructions are very unclear
 * TODO: make sure I'm not accidentally using 'JS Object' notation...
 * TODO: read about the difference between Maps and Objects, and Object notation
 */
class HashMap {
	constructor() {
		this.hmap = new Array();
	}

	// Getter
	get get() {
		return this.get(key);
	}

	// Methods
	get(key) {
		for (let i = 0; i < this.hmap.length; i++) {
			if (this.hmap[i][0] == key) {
				return this.hmap[i][1];
			}
		}
		return "Not found.";
	}

	set(key, val) {
		this.hmap.push([key,val]);
	}
}

function hashStr(str) {
	let finalHash = 0;
	for (let i = 0; i < str.length; i++) {
		const charCode = str.charCodeAt(i);
		finalHash += charCode;
	}
	return finalHash;
}

console.log(hashStr('testKey'));

const m = new HashMap();
m.set('name','Jake');
console.log(m.get('name'));

const x = new HashMap();
x.set('Ruddy','blue');
x.set('Killdeer','brown');
x.set('Plover','black');
x.set('Stilt','white');
console.log(x.get('Plover'));
