

/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
  const res = [];
    for (let i = 0; i < s.length; i++) {
        const len = res.length;
        if (len >= 2 && res[len - 1] === s[i] && res[len - 2] === s[i]) {
            continue; 
        }
        res.push(s[i]);
    }
    return res.join('');
}
