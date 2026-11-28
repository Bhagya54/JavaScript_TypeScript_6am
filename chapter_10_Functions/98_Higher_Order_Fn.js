function runWithLogin(testName, testFn) {
    let status = testFn();//Pass
    return result(testName, status)

}

function loginTest() {
    return "Pass"
}

function loginFailedTest() {
    return "Fail"
}

function result(testName, status) {
    console.log(`${testName} is ${status}`)
}

runWithLogin("Login Test", loginTest)
runWithLogin("Login Test Failed", loginFailedTest)


