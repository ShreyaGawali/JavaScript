const prompt = require('prompt-sync')();

const num1=parseInt(prompt("Enter a number"));

if(num1<0)
{
    console.log("factorial cant found")
}
else if(num1===0)
{
    console.log(`Factorial of ${num1} is 1`);

}
else
{
    let fact=1;
    for(let i=1;i<=num1;i++)
    {
        fact=fact*i;

    }
    console.log(`Factorial of ${num1} is ${fact}`)
}
