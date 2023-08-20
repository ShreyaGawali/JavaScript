const prompt = require('prompt-sync')();
let operator=prompt("Enter the operator(+,-,*,/):");

let num1=parseInt(prompt("Enter the first Number:"));
let num2=parseInt(prompt("Enter the second Number:"));
let result

if(operator=="+")
{
    result=num1+num2;
}
else if(operator=="-")
{
    result=num1-num2;
}
else if(operator=="*")
{
    result=num1*num2;
}
else{
    result=num1/num2;
}

console.log(`Result is ${result}` );