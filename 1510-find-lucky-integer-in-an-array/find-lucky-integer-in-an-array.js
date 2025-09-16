
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let freq = {}
    for(let i of arr){
        freq[i] = (freq[i]||0) + 1
    }
    let max = [-1]
    for (let i in freq){
        if(parseInt(i) === freq[i]){
            max.push(parseInt(i))
        }
        
    }
    return Math.max(...max)
};
