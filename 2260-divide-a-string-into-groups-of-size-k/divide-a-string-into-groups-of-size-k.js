/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    let a = []
    if(s.length % k == 0){
        for(let i = 0 ; i < s.length ; i = i + k)
        {
            a.push(s.slice(i,i+k))
        }
    }
    else{
        let rem = s.length % k
        for ( let i = 0 ; i < k-rem ; i++){
            s = s + fill
        }
           for(let i = 0 ; i < s.length ; i = i + k)
        {
            a.push(s.slice(i,i+k))
        }
    }
    return a
};