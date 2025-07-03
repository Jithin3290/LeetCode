/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    function helper(k) {
        if (k === 1) return 'a';

        let len = 1;
        while (len * 2 < k) {
            len *= 2;
        }

        if (k <= len) {
            return helper(k);
        } else {
            
            let prevChar = helper(k - len);
            return prevChar === 'z' ? 'a' : String.fromCharCode(prevChar.charCodeAt(0) + 1);
        }
    }

    return helper(k);
};
