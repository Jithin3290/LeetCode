var findLHS = function(nums) {
    let map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    let maxLen = 0;
    for (let [key, val] of map) {
        if (map.has(key + 1)) {
            maxLen = Math.max(maxLen, val + map.get(key + 1));
        }
    }

    return maxLen;
};
