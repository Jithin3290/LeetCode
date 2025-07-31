function operations(a){
    let leng=a.length
    let sum = 0
    for(let i = 0; i < leng; i++)
        {
            if(a[i]=="++X" || a[i]=="X++")
                {
                    sum++
                }
            else
            {
                sum--
            }    
        }
        console.log(sum)
}
    operations(["--X","X++","X++"])
    operations(["++X","++X","X++"])
    operations(["X++","++X","--X","X--"])

function capToFront(word)
{
    let f = "",b = ""
    for(let i of word)
        {
            let a = i.charCodeAt(0)
            if(a <= 90)
                {
                    f += i
                }
                else{
                    b += i
                }
        }
        console.log(f+b)
}    

capToFront("hApPy") 
capToFront("moveMENT") 
capToFront("shOrtCAKE")

function singleNumber(a)
{
    freq = {}
    for(let i of a)
        {
            freq[i] = (freq[i] || 0)+1
        }
    for(let j in freq)
        {
            if(freq[j] === 1)
                {
                    console.log(j)
                }
        }
}



singleNumber([2, 2, 1])
singleNumber([4, 1, 2, 1, 2]) 
singleNumber([3]) 

function getSum(arr)
{
    let sum = 0;
    for(let i of arr)
        {
            if(i % 4 == 0)
                {
                    sum += i
                }
        }
        console.log(sum)
}
getSum([1, 4, 8, 5, 2])
getSum([1, 2, 3, 4, 5])
getSum([16, 12, 3, 1, 8])