//Fibonacci series
const prompt = require('prompt-sync')();
let num=parseInt(prompt("enter the terms:"));
let n1=0,n2=1,nextTerm;

for(i=1;i<=num;i++)
{
    console.log(n1);
    nextTerm=n1+n2;
    n1=n2;
    n2=nextTerm;
}