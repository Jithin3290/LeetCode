class Solution(object):
    def fullJustify(self, words, maxWidth):
        """
        :type words: List[str]
        :type maxWidth: int
        :rtype: List[str]
        """
        res = []            
        curr_line = []       
        curr_len = 0        
        
        for w in words:
            if curr_len + len(curr_line) + len(w) > maxWidth:
                spaces = maxWidth - curr_len
                if len(curr_line) == 1:
                    res.append(curr_line[0] + " " * spaces)
                else:
                    space_between = spaces // (len(curr_line) - 1)
                    extra = spaces % (len(curr_line) - 1)
                    line = ""
                    for i in range(len(curr_line)):
                        line += curr_line[i]
                        if i < len(curr_line) - 1:  
                            line += " " * (space_between + (1 if i < extra else 0))
                    res.append(line)
                curr_line = []
                curr_len = 0
            
            curr_line.append(w)
            curr_len += len(w)
        
        last_line = " ".join(curr_line)
        last_line += " " * (maxWidth - len(last_line))
        res.append(last_line)
        
        return res
