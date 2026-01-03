  class Solution(object):
    def maxArea(self, height):
        left = 0
        right = len(height) - 1
        max_area_value = 0
        while left < right:
            area = (right - left) * min(height[left], height[right])
            if area > max_area_value:
                max_area_value = area
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1

        return max_area_value
        
