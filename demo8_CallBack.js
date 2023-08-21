//asynchronized process ko synchronized bana rahe hai.....

function One(abc,def)
{
    setTimeout(() => {
        console.log("Inside One function"); 
        abc(def);       
    }, 4000);
}

function Two(ghi)
{
    setTimeout(() => {
        console.log("Inside Two function");
        ghi();
    }, 3000);
}

function Three()
{
    setTimeout(() => {
        console.log("Inside Three function");
    }, 2000);
}

One(Two ,Three);        //Function Call
