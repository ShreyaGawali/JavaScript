async function getStuRollNo()
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
          },4000);

    });

    return promise;
}

async function getStuPerInfo(rollNo)
{
        let promise=new Promise((resolve,reject)=>
        {
            setTimeout(() => {
                let stud={roll:1234,fname:"Shreya",lname:"Gawali"};
                if(rollNo==stud.roll)
                {
                    resolve(stud);
                }
                else
                {
                    reject("Not found");
                }
            
            },3000);
        
        });

        return promise;
        
    
}

async function getstudAddressInfo(stuPer)
{
    let promise=new Promise((resolve,reject)=>{
        setTimeout(() => {
            let Add= { roll:1234, address: 'Mahal', pincode: '440032', city: 'Nagpur' };
            if(stuPer.roll==Add.roll)
            {
                resolve(Add);
            }
            else
            {
                reject("Not Found");
            }
            
        }, 2000);
    });

    return promise;

}

async function getstudcontact(AddInfo)
{
    let promise=new Promise((resolve,reject)=>{

        setTimeout(() => {
            let Conct={roll:1234, mobileNo: '9420247238', homeNo:'9665204633'};
            if(AddInfo.roll==Conct.roll)
            {
                resolve(Conct);
            }
            else
            {
                reject("Not found");
            }
        }, 4000);

    });

    return promise;

}

async function getStudFinalData(conct)
{
    let promise=new Promise((resolve,reject)=>{
        setTimeout(() => {
            let final={roll: 1234, fname: 'Shreya', lname:'Gawali', address: 'Mahal', pincode: '440032', city: 'Nagpur',mobileNo: '9420247238', homeNo:'9665204633'};
            if(conct.roll==final.roll)
            {
                resolve(final);
            }
            else
            {
                reject("Not Found");
            }
        }, 3000);

    });

    return promise;
}



async function load()
{
    try
    {
        let rollno= await getStuRollNo();
        console.log(rollno);

        let perinfo= await getStuPerInfo(rollno);
        console.log(perinfo);

        let address=await getstudAddressInfo(perinfo);
        console.log(address);

        let contact=await getstudcontact(address);
        console.log(contact);

        let final=await getStudFinalData(contact);
        console.log(final);
    }
    catch(err)
    {
        console.log(err);
    }

}

load();

