function runTest(name,status,duration){
    return `${name}:${status} (${duration}ms)`
}

let a=runTest("login test","pass",2000)
console.log(a)