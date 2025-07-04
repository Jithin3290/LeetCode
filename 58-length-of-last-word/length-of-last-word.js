/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr= s.trim().split(" ")
    return arr.slice(-1).join("").length
    
};