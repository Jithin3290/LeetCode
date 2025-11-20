from typing import List

class Solution:
    def intersectionSizeTwo(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda x: (x[1], -x[0]))
        
        ans = 0
        a, b = -10**18, -10**18
        
        for l, r in intervals:
            cnt = 0
            if a >= l and a <= r:
                cnt += 1
            if b >= l and b <= r:
                cnt += 1
            
            if cnt >= 2:
                continue
            if cnt == 1:
                a, b = b, r
                ans += 1
            else:                
                a, b = r - 1, r
                ans += 2
        
        return ans
