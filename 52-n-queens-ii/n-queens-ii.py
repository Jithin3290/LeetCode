class Solution(object):
    def totalNQueens(self, n):
        """
        :type n: int
        :rtype: int
        """
        cols = set()      
        posDiag = set()   
        negDiag = set()   
        self.count = 0    

        def backtrack(row):
            if row == n:  
                self.count += 1
                return
            
            for col in range(n):
                if col in cols or (row + col) in posDiag or (row - col) in negDiag:
                    continue  
                
                cols.add(col)
                posDiag.add(row + col)
                negDiag.add(row - col)

                backtrack(row + 1)  

                cols.remove(col)
                posDiag.remove(row + col)
                negDiag.remove(row - col)

        backtrack(0)
        return self.count
