
const prompt = require('prompt-sync')();

let sentense=prompt("Enter the sentense:");

let words=sentense.split(' ');
console.log(words);

words.sort();

for(let ele of words)
{
    console.log(ele);
}