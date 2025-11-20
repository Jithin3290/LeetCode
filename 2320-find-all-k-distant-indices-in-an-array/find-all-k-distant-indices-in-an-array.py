from typing import List

class Solution:
    def findKDistantIndices(self, nums: List[int], key: int, k: int) -> List[int]:
        n = len(nums)
        marked = [False] * n
        
        for j, val in enumerate(nums):
            if val == key:
                left = max(0, j - k)
                right = min(n - 1, j + k)
                for idx in range(left, right + 1):
                    marked[idx] = True
        
        return [i for i, ok in enumerate(marked) if ok]
