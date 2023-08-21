
function factorial(num)
{
    if(num==0)
    {
        return 1;
    }
    else
    {
        return num*factorial(num-1);
    }
}


const prompt = require('prompt-sync')();
let num=prompt("Enter the number:");
if(num<0)
{
    console.log("Enter the number:");
}
else
{
    let result=factorial(num);
    console.log(result);
}