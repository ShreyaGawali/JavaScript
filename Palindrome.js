const prompt = require('prompt-sync')();
function Palindrome(String)
{
    let len=String.length;
    for(i=0;i<len/2;i++)
    {
        if(String[i]==String[len-1-i])
        {
            return "String is Palindrome";
        }
        else
        {
            return "String is not palindrome";
        }
    }
}

let str=prompt("Enter the string:");
let result=Palindrome(str);
console.log(result);