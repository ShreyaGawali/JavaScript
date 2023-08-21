
function fibonacci(num)
{
    if(num<2)
    {
        return num;
    }
    else
    {
        return fibonacci(num-1)+ fibonacci (num-2);
    }
}


const prompt = require('prompt-sync')();

let terms=prompt("Enter the Terms:");

if(terms<=0)
{
    console.log("Enter the Terms:");
}
else
{
    for(i=0;i<terms;i++)
    {
        console.log(fibonacci(i));
    }
}
