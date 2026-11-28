let env = "staging"//global scope

function setUpConfig() {
    let timeout = 3000;//local scope
    console.log(env)
    console.log(timeout)
}

setUpConfig()
console.log(env)
console.log(timeout)