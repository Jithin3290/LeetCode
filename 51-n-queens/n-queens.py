class Solution(object):
    def solveNQueens(self, n):
        """
        :type n: int
        :rtype: List[List[str]]
        """
        res = []
        board = [-1] * n  
        def is_safe(row, col):
            for r in range(row):
                c = board[r]
                if c == col or abs(row - r) == abs(col - c):
                    return False
            return True

        def backtrack(row):
            if row == n:
                solution = []
                for r in range(n):
                    row_str = ['.'] * n
                    row_str[board[r]] = 'Q'
                    solution.append("".join(row_str))
                res.append(solution)
                return

            for col in range(n):
                if is_safe(row, col):
                    board[row] = col
                    backtrack(row + 1)
                    board[row] = -1  

        backtrack(0)
        return res
