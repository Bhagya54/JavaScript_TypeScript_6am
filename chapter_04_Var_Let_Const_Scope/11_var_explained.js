var a = 10;
console.log("Global Scope:", a)

function printHello() {
    var a = 20;//local scope
    console.log("Local Scope:", a)//20

    if (true) {
        var a = 30;//redeclaration of the 'a' variable
        console.log("Inside the if block:", a)//30
    }

    for (var a = 50; a < 60; a++) {//a=60
    }

    console.log("Outside for loop:", a)//60
}

printHello();
console.log("Outside the function:", a)//10