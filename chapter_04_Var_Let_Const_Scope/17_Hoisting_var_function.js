getStatus();

function getStatus(){
    console.log(status)//hoisted and initializes -undefined
    var status="pending";
    console.log(status)//pending
    var status="assigned";
    console.log(status)

    if(true){
        console.log("block scope:",status)
        var status="fixed";
        console.log("block scope:",status)
    }

    console.log("outside the if block:",status)

}