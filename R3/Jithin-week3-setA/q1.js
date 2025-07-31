

function findIndex(a,t)
{
    let li = []
   
    for(let i=0; i<a.length; i++)
        {
            let k = 0
            k = k + a[i]
            for(let j=i+1; j<a.length; j++)
                {
                    if(a[j] <= t )
                        {
                            k = k + a[j]
                            if(k <= t)
                                {
                                    li.push(i)
                                    li.push(j)
                                    if( k == t)
                                        {
                                            return new Set(li)
                                        }
                                 }
                        }
                }
        }
        
}

console.log(...(findIndex([2,7,11,15] , 9)))
console.log(...(findIndex([8,1,22,1,13,1] , 3 ))) 