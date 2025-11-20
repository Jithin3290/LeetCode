class Solution(object):
    def possibleStringCount(self, word):
        """
        :type word: str
        :rtype: int
        """
        n = len(word)
        ans = 1  # the case where Alice typed exactly what's shown
        i = 0
        while i < n:
            j = i + 1
            while j < n and word[j] == word[i]:
                j += 1
            run_len = j - i
            if run_len > 1:
                ans += run_len - 1
            i = j
        return ans
