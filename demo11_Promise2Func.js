

function getStuRollNo()
{
    let promise=new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            let rollno=1234;
            if(rollno==' ')
            {
                reject("We didnt get student rollNo");
            }
            else
            {
                resolve(rollno);
            }
          },6000);

    });

    return promise;
}

function getStuData(rollNo)
{
    let stud={roll:1234,fname:"Shreya",lname:"Gawali"};
    if(rollNo==stud.roll)
    {
        return stud;
    }
}


let prom=getStuRollNo();

prom.then((rollno)=>
    {
        console.log("Inside then");
        console.log(`Roll Number=${rollno}`);
        let stuId=getStuData(rollno);
        console.log(stuId);
    }
).catch((err)=>
{
    console.log("inside Catch block");
    console.log(err);
}
);