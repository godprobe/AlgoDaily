# Day 1: Array Intersection

Can you write a function that takes two inputs and returns their intersection? All elements in the final result should be unique.

```javascript
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];

intersection(nums1, nums2);
// [2]
```

Here's another one:

```javascript
const nums1 = [4,9,5];
const nums2 = [9,4,9,8,4];

intersection(nums1, nums2);
// [9, 4]
```

# Test Cases

* `intersection([ 6,0,12,10,16 ],[ 3,15,18,20,15 ])` should return `[]`

* `intersection([ 1,5,2,12,6 ],[ 13,10,9,5,8 ])` should return `[ 5 ]`

* `intersection([ 4,17,4,4,15,16,17,6,7 ],[ 15,2,6,20,17,17,8,4,5 ])` should return `[ 15,6,17,4 ]`

* `intersection([ 3 ],[ 15 ])` should return `[]`

* `intersection([ 2,16,8,9 ],[ 14,15,2,20 ])` should return `[ 2 ]`
