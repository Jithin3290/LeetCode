from typing import List
import bisect

class Solution:
    def kthSmallestProduct(self, nums1: List[int], nums2: List[int], k: int) -> int:
        def ceil_div(x: int, y: int) -> int:
            q, r = divmod(x, y)
            return q if r == 0 else q + 1

        def count_le(x: int) -> int:
            cnt = 0
            m = len(nums2)
            for a in nums1:
                if a == 0:
                    if x >= 0:
                        cnt += m
                elif a > 0:
                    t = x // a
                    cnt += bisect.bisect_right(nums2, t)
                else:  
                    t = ceil_div(x, a)
                    idx = bisect.bisect_left(nums2, t)
                    cnt += m - idx
            return cnt

        lo, hi = -10**10 - 1, 10**10 + 1
        while lo < hi:
            mid = (lo + hi) // 2
            if count_le(mid) >= k:
                hi = mid
            else:
                lo = mid + 1
        return lo
