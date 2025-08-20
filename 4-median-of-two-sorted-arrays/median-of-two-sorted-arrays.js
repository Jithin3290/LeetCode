/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let m = nums1.length;
    let n = nums2.length;
    let totalLeft = Math.floor((m + n + 1) / 2);

    let left = 0, right = m;

    while (left <= right) {
        let i = Math.floor((left + right) / 2); 
        let j = totalLeft - i; 

        let nums1Left = (i === 0) ? -Infinity : nums1[i - 1];
        let nums1Right = (i === m) ? Infinity : nums1[i];
        let nums2Left = (j === 0) ? -Infinity : nums2[j - 1];
        let nums2Right = (j === n) ? Infinity : nums2[j];

        if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
            if ((m + n) % 2 === 1) {
                return Math.max(nums1Left, nums2Left);
            } else {
                return (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) / 2;
            }
        } else if (nums1Left > nums2Right) {
            right = i - 1; 
        } else {
            left = i + 1; 
        }
    }
};
