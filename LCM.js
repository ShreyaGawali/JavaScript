
const prompt = require('prompt-sync')();

let num1=prompt("Enter the first number: ");
let num2=prompt("Enter the second number: ");

let min= num1>num2?num1:num2;

while(true)
{
    if(min%num1==0 && min%num2==0)
    {
        console.log('LCM is:',min);
        break;
    }
    min++;
}