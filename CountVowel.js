
const prompt = require('prompt-sync')();
function VowelCount(str)
{
    return str.match(/[aeiou]/gi).length;

    
}

let s1=prompt("Enter the string:");
let res=VowelCount(s1);
console.log(res);