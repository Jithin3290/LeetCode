class Solution(object):
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]

        """
        number = int("".join(str(d) for d in digits))
        number += 1
        return [int(d) for d in str(number)]
