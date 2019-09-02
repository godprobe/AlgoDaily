# Day 9: Implement a Hash Map

Can you implement the JS Map class from scratch? Only two methods are necessary-- `get` and `set`. Do not use `JS Objects` ({} notation) for this exercise.

*Note: Regular Javascript objects and the Map class are both simple key-value hash tables/associative arrays, with a few key differences:

A `Map` object can iterate through its elements in insertion order, whereas JavaScript's `Object`s don't guarantee an order. In addition, `Object`s have default keys due to their prototype, and `Map`s don't come with default keys. [Here's a good breakdown](https://medium.com/front-end-weekly/es6-map-vs-object-what-and-when-b80621932373) of the two. For the purpose of this exercise, let's assume the same functionality for both.*

For the two methods you'll define:

# `get(key: string)` should be given a key, and return the value for that key.
# `set(key: string, val: string)` should take a key and a value as parameters, and store the pair.

Additionally, we've supplied the below hashing function `hashStr`. It tries to avoid collision, but is not perfect. It takes in a string value and returns an integer.

```javascript
function hashStr(str) {
	let finalHash = 0;
	for (let i = 0; i < str.length; i++) {
		const charCode = str.charCodeAt(i);
		finalHash += charCode;
	}
	return finalHash;
```

```javascript
console.log(hashStr('testKey'))
```

Let's call our new class the Hashmap class:

```javascript
const m = new Hashmap();
m.set('name', 'Jake');
console.log(m.get('name'));
```

