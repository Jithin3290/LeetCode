var maximumUniqueSubarray = function(nums) {
    let seen = new Set();
    let left = 0;
    let currSum = 0;
    let maxSum = 0;

    for (let right = 0; right < nums.length; right++) {
        while (seen.has(nums[right])) {
            seen.delete(nums[left]);
            currSum -= nums[left];
            left++;
        }
        seen.add(nums[right]);
        currSum += nums[right];
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
};
