function extract(ob)
{
    let sum =  0
    for(let i in ob)
        {
            sum = sum + ob[i]
        }
     console.log(sum)   
}


extract({ first: 1, second: 6, third: 5 })
extract({ first: 1, second: -6, third: 10 })
extract({ first: 3, second: 2.6, third: 10 })