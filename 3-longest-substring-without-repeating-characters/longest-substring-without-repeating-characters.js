var lengthOfLongestSubstring = function(s) {
    let max = 0, sub = "";

    for (let i = 0; i < s.length; i++) {
        if (sub.includes(s[i])) {
            sub = sub.slice(sub.indexOf(s[i]) + 1);
        }

        sub += s[i]; 
        max = Math.max(max, sub.length);
    }

    return max;
};
