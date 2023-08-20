const prompt = require('prompt-sync')();

let num=prompt("Enter the number:");

console.log(`The Factors of ${num} is:`);
for(i=1;i<=num;i++)
{
    if(num%i==0)
    {
    console.log(i);
    }
}