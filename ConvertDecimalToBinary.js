//Is use to convert decimal into binary
const prompt = require('prompt-sync')();

let num=parseInt(prompt("Enter the number"));

let number=num.toString(2);
console.log(number);