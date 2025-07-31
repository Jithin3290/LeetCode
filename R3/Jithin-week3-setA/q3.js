function oddOrEven(a)
{
    let l = a.toString()

    if(l.length <= 1)
        {
            console.log("enter more than one digit")
        }
        else
        {
            let sum = 0
            while(a>0)
                {
                    let r = a %10
                    sum += r
                    a = Math.floor(a/10)
                }
                if(sum % 2 == 0)
                    {
                        console.log("Even")
                    }
                 else
                 {
                    console.log("Odd")
                 }   
        }
}

oddOrEven(43)
oddOrEven(373) 
oddOrEven(4433) 