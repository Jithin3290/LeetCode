class Solution:
    def isPalindrome(self, x: int) -> bool:
        s = str(x)
        res = ""
        for i in s:
            res = i + res
        return res == str(x)
        