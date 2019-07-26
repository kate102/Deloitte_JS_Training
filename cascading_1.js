RECURSIVE FUNCTIONS

Write a function which deep joins an array of numbers, turning then into a string.

Example:

```fn([3, 5, 7, 9]) === '3,5,7,9'
fn([3, 4, [1, 2, 7, [10, 15]], 6], '-') === '3-4-1-2-7-10-15-6'```