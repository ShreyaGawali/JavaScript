
// program to check if a string starts with 'S' and ends with 'G'
const prompt = require('prompt-sync')();
function checkString(str) {

    
    if(str.startsWith('S') && str.endsWith('G')) {
        console.log('The string starts with S and ends with G');
    }
    else if(str.startsWith('S')) {
        console.log('The string starts with S but does not end with G');
    }
     else if(str.endsWith('G')) {
        console.log('The string starts does not with S but end with G');
    }
    else {
        console.log('The string does not start with S and does not end with G');
    }
}



let string = prompt('Enter a string: ');
checkString(string);