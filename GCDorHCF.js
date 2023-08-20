
const prompt = require('prompt-sync')();

let hcf;
let num1=prompt("Enter the first number: ");
let num2=prompt("Enter the second number: ");

for(i=1;i<=num1 &&i<=num2;i++)
{
    if(num1%i==0 && num2%i==0)
    {
        hcf=i;
    }
}
console.log(`${num1} and ${num2} have gcd ${hcf}`);