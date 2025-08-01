/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums . includes (target)){
    let s = nums.findIndex(item => {
        return item == target
    })
    return s}
    else{
        nums.push(target)
        let arr = nums.sort((a,b)=>a-b)
         let s = arr.findIndex(item => {
        return item == target
    })
    return s
    }
};