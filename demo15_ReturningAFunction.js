
/*function greet(name) {
    function displayName() {
        console.log('Hi' + ' ' + name);
    }

    // returning a function
    return displayName;
}

const g1 = greet('John');
console.log(g1); // returns the function definition
g1(); // calling the function*/


function name1(fname)
{
    function surname(lname)
    {
        console.log(fname + ' ' + lname);
    }
    return surname;
}

const f1=name1('Shreya');
console.log(f1);
f1('Gawali');
