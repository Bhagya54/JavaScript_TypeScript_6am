const baseURL = "https://google.com"
//const baseURL="https://gmail.com"//redeclaration is not possible
//baseURL = "https://redbus.com"//TypeError: Assignment to constant variable.

const name="pending"
{
    const name="done"
    console.log("Inside block:",name)//done
}

function say(){
    const name="bhagya"
    console.log("Inside Fn:",name)//bhagya

    if(true){
        const name="harish"
        console.log("Inside if block :",name)// harish
    }

    for(let a=10;a<11;a++){
        const name="tina"
        console.log("Inside for block :",name)// tina
    }

    console.log("Outside the block:",name)//bhagya
}

say();
console.log("Outside all the blocks:",name)//pending