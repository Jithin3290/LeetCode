function longestSubsequenceRepeatedK(s, k) {
    const freq = {};
    for (let ch of s) freq[ch] = (freq[ch] || 0) + 1;

    const chars = Object.entries(freq)
        .filter(([_, count]) => count >= k)
        .map(([ch]) => ch)
        .sort((a, b) => b.localeCompare(a)); 

    const n = s.length;
    const nextPos = Array(n + 1).fill(0).map(() => Array(26).fill(-1));
    const aCode = 'a'.charCodeAt(0);

    for (let i = n - 1; i >= 0; i--) {
        for (let j = 0; j < 26; j++) {
            nextPos[i][j] = nextPos[i + 1][j];
        }
        nextPos[i][s.charCodeAt(i) - aCode] = i + 1;
    }

    const isKSubseq = (str) => {
        let pos = 0;
        for (let t = 0; t < k; t++) {
            for (let ch of str) {
                pos = nextPos[pos][ch.charCodeAt(0) - aCode];
                if (pos === -1) return false;
            }
        }
        return true;
    };

    let result = "";
    const queue = [""];

    while (queue.length) {
        const curr = queue.shift();

        for (let i = 0; i < chars.length; i++) {
            const next = curr + chars[i];
            if (isKSubseq(next)) {
                if (
                    next.length > result.length ||
                    (next.length === result.length && next > result)
                ) {
                    result = next;
                }
                queue.push(next);
            }
        }
    }

    return result;
}
