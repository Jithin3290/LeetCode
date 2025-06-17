/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y = String(x)
    if(x<0)
    {
        return false
    }
    else if(x == y.split("").reverse().join(""))
    {
        return true
    }
    else
    {
        return false
    }

};