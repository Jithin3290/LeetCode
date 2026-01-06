# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        dummy = ListNode(0, head)
        fast = slow = dummy

        # move fast n steps ahead
        for _ in range(n):
            fast = fast.next

        # move both pointers until fast reaches last node
        while fast.next:
            fast = fast.next
            slow = slow.next

        # remove the node
        slow.next = slow.next.next

        return dummy.next
