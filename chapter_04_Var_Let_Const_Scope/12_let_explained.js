let retryCount = 0;
//let retryCount=1;
retryCount = retryCount + 1;//0+1=1
retryCount = retryCount + 1;//1+1=2
console.log("retryCount:", retryCount)//2

//let is block scope
//{}
//if{}
//for(){}
//function name(){}

let testStatus = "pending"
if (testStatus === "pending") {
    let executionTime = 2000;
    console.log("Inside the If block", executionTime)//2000
}

{
    let executionTime = 5000;
    console.log("Inside the block", executionTime)//5000
}

for (let i = 10; i < 11; i++) {
    let executionTime = 1000;
    console.log("Inside the for block", executionTime)//1000
}

console.log("Outside all blocks", executionTime)//ReferenceError: executionTime is not defined
