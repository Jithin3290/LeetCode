from typing import List

class Solution:
    def numSubseq(self, nums: List[int], target: int) -> int:
        MOD = 10**9 + 7
        nums.sort()
        n = len(nums)
        
        # precompute powers of two: pow2[t] = 2^t % MOD
        pow2 = [1] * (n)
        for i in range(1, n):
            pow2[i] = (pow2[i-1] * 2) % MOD
        
        ans = 0
        left, right = 0, n - 1
        while left <= right:
            # decrease right until pair fits
            if nums[left] + nums[right] <= target:
                # all subsets of elements in (left, right] are valid choices
                ans = (ans + pow2[right - left]) % MOD
                left += 1
            else:
                right -= 1
        
        return ans
