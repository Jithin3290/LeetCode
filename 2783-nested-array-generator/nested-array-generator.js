/**
 * @param {Array} arr
 * @return {Generator}
 */
var inorderTraversal = function* (arr) {
    for (let el of arr) {
        if (Array.isArray(el)) {
            yield* inorderTraversal(el);
        } else {
            yield el; 
        }
    }
};


