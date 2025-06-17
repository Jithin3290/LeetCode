var maximumDifference = function(nums) {
    let dif = -1;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) { 
            if (nums[j] > nums[i]) {
                dif = Math.max(dif, nums[j] - nums[i]);
            }
        }
    }

    return dif;
};
