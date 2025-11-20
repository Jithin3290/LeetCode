from typing import List

class Solution:
    def longestSubsequence(self, s: str, k: int) -> int:
        res = 0
        cur = 0        # current numeric value of chosen subsequence (from selected '1's)
        power = 0      # number of selected characters so far; next selected char has weight 1<<power

        for ch in reversed(s):
            if ch == '0':
                # always safe to include a '0' (it contributes zero), but it occupies a bit
                res += 1
                power += 1
            else:  # ch == '1'
                # if the next weight already exceeds k, we can never include this or any earlier '1'
                # because weights only increase. So skip this '1'.
                if power >= 31:  # since k <= 1e9 < 2^30, any 1<<31 > k
                    continue
                weight = 1 << power
                if cur + weight <= k:
                    cur += weight
                    res += 1
                    power += 1
                # else skip this '1' (do not increment power)

        return res
