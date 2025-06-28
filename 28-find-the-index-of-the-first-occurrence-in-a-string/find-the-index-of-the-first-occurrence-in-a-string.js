function strStr(haystack, needle) {
    const lenH = haystack.length;
    const lenN = needle.length;

    for (let i = 0; i <= lenH - lenN; i++) {
        if (haystack.substring(i, i + lenN) === needle) {
            return i;
        }
    }
    return -1;
}
