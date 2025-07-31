/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    if (word.length < 3) return false;

    let hasVowel = false;
    let hasConsonant = false;
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);

    for (let ch of word) {
        if (!/[a-zA-Z0-9]/.test(ch)) return false;

        if (/[a-zA-Z]/.test(ch)) {
            if (vowels.has(ch)) {
                hasVowel = true;
            } else {
                hasConsonant = true;
            }
        }
    }

    return hasVowel && hasConsonant;
};
