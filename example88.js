// 88. Merge Sorted Array

// You are given two integer arrays nums1 and nums2, sorted in non - decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.



function mergeArray(nums1, m, nums2, n) {
    let p1 = m - 1; // Pointer for the end of the valid elements in nums1
    let p2 = n - 1; // Pointer for the end of nums2

    for (let p = m + n - 1; p >= 0; p--) {
        // If all elements from nums2 have been merged, we can break out
        if (p2 < 0) break;

        // If nums1 is exhausted, or nums2 has a greater element
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
    }
    return nums1
}


console.log(mergeArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)) // Output: [1,2,2,3,5,6]
console.log(mergeArray([1], 1, [], 0)) // Output: [1]
console.log(mergeArray([0], 0, [1], 1)) // Output: [1]