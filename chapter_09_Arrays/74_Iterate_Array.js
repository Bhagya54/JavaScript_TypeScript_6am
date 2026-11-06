let tests = ["LoginTest", "RegisterTest", "CheckoutTest"]
//Normal for loop
for (let i = 0; i < tests.length; i++) {
    console.log("Using Normal for loop:", tests[i])
}

//2.Using for..of loop
for (let test of tests) {
    console.log("Using for..of loop:", test)
}

//3. Using for .. in loop
for (let index in tests) {
    console.log("Using for..in loop:", tests[index])
}

//4. Using for..each loop
tests.forEach((test, index) => console.log(`Using for..each: At Index: ${index}, value: ${test}`))
