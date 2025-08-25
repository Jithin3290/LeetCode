/**
 * @param {Generator} generator
 * @return {[Function, Promise]}
 */
var cancellable = function (generator) {
    let cancelled = false;

    const cancel = () => {
        cancelled = true;
    };

    const promise = new Promise((resolve, reject) => {
        function step(method, arg) {
            let result;
            try {
                result = generator[method](arg); // move generator forward
            } catch (err) {
                reject(err);
                return;
            }

            const { value, done } = result;
            if (done) {
                resolve(value); // generator finished
                return;
            }

            // Wrap the yielded value in a promise
            Promise.resolve(value).then(
                (val) => {
                    if (cancelled) {
                        try {
                            step("throw", "Cancelled"); // throw into generator
                        } catch (err) {
                            reject(err);
                        }
                    } else {
                        step("next", val); // pass resolved value back
                    }
                },
                (err) => {
                    if (cancelled) {
                        try {
                            step("throw", "Cancelled");
                        } catch (err) {
                            reject(err);
                        }
                    } else {
                        step("throw", err); // pass error back to generator
                    }
                }
            );
        }

        step("next");
    });

    return [cancel, promise];
};

/**
 * Example Usage:
 * function* tasks() {
 *   const val = yield new Promise(resolve => resolve(2 + 2));
 *   yield new Promise(resolve => setTimeout(resolve, 100));
 *   return val + 1;
 * }
 * const [cancel, promise] = cancellable(tasks());
 * setTimeout(cancel, 50);
 * promise.catch(console.log); // logs "Cancelled" at t=50ms
 */
