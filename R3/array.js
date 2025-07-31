function digit(a)
{
    let c = 0
    while(a > 0)
        {
            let r = a % 10;
            c++
            a = Math.floor(a/10)
        }
    console.log(c)
}
digit(1234235)

function pal(a)
{
    a=a.toString()
    let b=a.split("").reverse().join("");
    if(a==b)
        {
            console.log("true")
        }
    else
    {
        console.log("false")
    }    
}
pal("1e1")

function dupli(a)
{
    let b= new Set(a)
    let c= Array.from(b)
    console.log([...b].join(""))
}
dupli([1,1,1,2,3,4,4])

function long(s)
{
    let a = s.split(" ")
    let che = a[0]
    let mx = 0
    for(let i=0; i<a.length-1; i++)
        {
            if(a[i].length > mx)
                {
                    mx = a[i].length
                }
        }
        let res = a.filter((item) => 
        {
            return item.length == mx
        })
        console.log(res)
}
long("hello world hi")

function canFormPalindrome(s)
{
    let freq = {}
    for(let i of s)
        {
            freq[i] = (freq[i] || 0) + 1
        }
    let od = 0
    for(let i in freq)
        {
            if(freq[i] % 2 != 0)
                {
                    od++
                }
        }
        return od <= 1
}

console.log(canFormPalindrome("civic"));   // true
console.log(canFormPalindrome("ivicc"));   // true
console.log(canFormPalindrome("hello"));   // false
console.log(canFormPalindrome("aabbc"));    // true

function compress(str)
{
    let freq = {}
    for(let i of str)
        {
            freq[i] = (freq[i] || 0) + 1
        }
        let a =""
        for(let i in freq)
            {
                a = a + i + freq[i]
            }
    console.log(a)
}

compress("aabcccccaaa") 
compress("abcdef")

function groupAnagrams(strs) {
    const map = {};

    for (let word of strs) {
        const key = word.split("").sort().join(""); // Sorted version
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(word);
    }

    const result = Object.values(map);
    console.log(result);
    return result;
}

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(".................................");
function target(arr,t)
{
    for(let i = 0; i<arr.length; i++)
        {
            for(let j = i+1; j<arr.length; j++)
                {
                    if(arr[i] + arr[j] == t)
                        {
                            console.log(i,j) 
                        }
                }

        }
}
target( [2,7,11,15],9)
target( [3,2,4],6)

function areObjectsEqual(ob1,ob2)
{
   let a = Object.keys(ob1)
   let b = Object.keys(ob2)
   if(a.length != b.length)
    {
        return false
        }
        for(let i = 0; i<a.length;i++)
            {
                if(ob1[a[i]] != ob2[a[i]])
                    {
                        return false
                        }
                        }
                        return true
                        
                        
}

const obj1 = { name: "Benny", phone: "3325558745", email: "benny@edabit.com" };
const obj2 = { name: "Benny", phone: "3325558745", email: "benny@edabit.com" };

console.log(areObjectsEqual(obj1, obj2)); // true

const obj3 = { name: "Jason", phone: "9853759720", email: "jason@edabit.com" };

areObjectsEqual(obj1, obj3) ; // false
