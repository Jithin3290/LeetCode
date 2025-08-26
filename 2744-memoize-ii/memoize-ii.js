/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();
    const RESULT = Symbol("result"); 

    function memoized(...args) {
        let node = cache;

        for (const arg of args) {
            if (!node.has(arg)) node.set(arg, new Map());
            node = node.get(arg);
        }

        if (node.has(RESULT)) {
            return node.get(RESULT);
        }

        const val = fn(...args);
        node.set(RESULT, val);
        return val;
    }

    return memoized;
}
