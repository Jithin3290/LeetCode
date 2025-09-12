   /**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let tot = 0;
      const freq = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    for (let i = 0;i < s.length; i++)
    {
        let c = freq[s[i]]
        let n = freq[s[i+1]]
        if(c < n)
        {
            tot+= (n-c)
            i = i+1
        }
        else
        {
            tot+= c
        }
    }
    return tot
};
