// 7. Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 

function reverseString(x) {
    reverseVal = Math.abs(x).toString().split('').reverse().join('')
    reverseVal = x > 0 ? reverseVal : -reverseVal
    reverseVal = Number(reverseVal);
    return reverseVal
}

console.log(reverseString(123)) // Output: 321
console.log(reverseString(-123)) // Output: -321
console.log(reverseString(120)) // Output: 21