function maxSubsequence(nums, k) {
    const withIndex = nums.map((val, idx) => [val, idx]);

    withIndex.sort((a, b) => b[0] - a[0]);

    const topK = withIndex.slice(0, k);

    topK.sort((a, b) => a[1] - b[1]);

  
    return topK.map(pair => pair[0]);
}
