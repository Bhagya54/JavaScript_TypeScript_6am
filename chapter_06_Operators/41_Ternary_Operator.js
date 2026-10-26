let raj_age = 8;
let person_goes_goa = raj_age >= 18 ? "Raj can go to goa" : "Not allowed to go to goa";
console.log(person_goes_goa)

let actualStatusCode = 200;
let expectedStatusCode = 200;//created-post request
let result = (actualStatusCode === expectedStatusCode) ? "PASS" : "FAIL"
console.log(result)

let environment = "staging"
let baseURL = environment === "Production" ? "https://api.example.com" : "https://staging.example.com"
console.log(baseURL)

let isCI = true
let browserMode = isCI ? "headless" : "headed"
console.log("Launching browser in", browserMode, "mode")

let responseTime = 850;
let sla = 1000;//service level agreement
let slaStatus = responseTime <= sla ? "Within SLA" : "SLA breached"
console.log(`Response: ${responseTime}ms - ${slaStatus}`)


//Largest of 2 number
let a = 100;
let b = 680;
let result_largest = a > b ? a : b
console.log(result_largest)

//largest of 3 values
let x = 120;
let y = 16;
let z = 300;
/*
x>y and x>z - x is the greatest - 12>=16 && 12>=3 - false
y>z - true(y largest) - false(z is largest) - 16>=300
*/
let result_largest_Of3 = (x >= y && x >= z) ? "x is the largest" : (y >= z ? "y is the largest" : "z is the largest")
console.log(result_largest_Of3)

let statusCode = 404
let category = statusCode < 300 ? "Success" :
               statusCode < 400 ? "Redirect" :
               statusCode < 500 ? "Client error" : "Server error";
console.log(`Status ${statusCode} - Category ${category}`);

