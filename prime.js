// program to check if a number is prime or not
const prompt = require('prompt-sync')();

const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;


if (number === 1) 
{
    console.log("1 is neither prime nor composite number.");
}

else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}