function missingNumber(arr)
{
    let n = arr[0]-1
    for(let i of arr)
        {
            n += 1
            if((i != n))
                {
                    console.log(n)
                    n = n+1
                }
                
        }
}
missingNumber([1,2,4,5]) 
missingNumber([10,12,13,14]) 



