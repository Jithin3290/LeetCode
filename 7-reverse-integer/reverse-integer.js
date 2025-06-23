/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let s = x
    let sum = 0
    if(s > 0)
    {
        while(s> 0){
        let r = s % 10
        sum = sum*10 + r
        s = Math.floor(s / 10)
        }
        x = sum
        if( x <= (2 ** 31)-1)
        {
            return x
        }
        else
        {
            return 0
        }
    }
    else if(s < 0)
    {
        s =s * -1
        while(s> 0){
        let r = s % 10
        sum = sum*10 + r
        s = Math.floor(s / 10)
        }
        x = sum * -1
        if(x >= (-1)*(Math.pow(2,31))-1)
        {
            return x
        }
        else
        {
            return 0
        }
    }
    return x 
};