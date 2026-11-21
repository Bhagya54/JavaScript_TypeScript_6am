function retry(testcasename,retryCount=3,delay=1000){
    console.log(`Retrying ${testcasename} for ${retryCount} times with a delay of ${delay} ms`)
}

retry("Login Test")

retry("Register Test",5,5000)


