function word(arr)
{
   let l =  arr.length,res=""
   for(let i=0; i<l; i=i+1)
    {
        if(i%2 == 0)
            {
                let c = arr[i].charCodeAt(0)
                if(c > 90)
                    {
                        res+=String.fromCharCode(c-32)
                    }
                else
                {
                    res+=arr[i]
                }
            }
        else
        {
            let c = arr[i].charCodeAt(0)
                if(c < 90)
                    {
                        res+=String.fromCharCode(c+32)
                    }
                    else{
                        res+=arr[i]
                    }
        }    
    }
    console.log(res)
}
word("bridgeon")
word("HELLO")
word("code")

function operations(arr)
{
    let tot = 0;
    for(let i of arr)
        {
            if(i=="i")
                {
                    tot+=1
                }
            else if(i=="s")
                {
                    tot = tot*tot
                }   
            else if(i=="d")
                {
                    tot -= 1
                }     
        }
        console.log(tot)

}
operations("iiisd") 
operations("dsdi") 
operations("iiss")

function missingNumber(arr)
{
    let n = arr.length
    for(let i=0; i<=n; i++)
        {
            if(!(arr.includes(i)))
                {
                    console.log(i)
                }
        }
}
missingNumber([2, 0, 1, 4])
missingNumber([0, 1]) 
missingNumber([4, 2, 3, 5, 0]) 


function getSum(arr)
{
    let sum = 0;
    for(let i of arr)
        {
            if(i<0)
                {
                    i = i*-1
                    sum+=i
                }
            else
            {
                sum+=i
            }    
        }
        console.log(sum)
}
getSum([2,-1, 4, 8, 10]) 
getSum([-3,-4,-10,-2,-3]) 
getSum([2, 4, 6, 8, 10]) 

let str="jithin c"
console.log(str.split(" ").reverse().join(" "))

let str2="jithinn c"
let k=new Set(str2)
console.log([...k].join(""))

let arr3=[1,22,3,44,54,322]
Number(arr3.sort())
console.log(arr3[arr3.length-1])
function ss()
{
    window.alert("clicked")
}