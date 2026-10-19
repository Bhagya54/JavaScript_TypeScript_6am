let lang = "javascript";
console.log("I am learning", lang)
console.log(`I am learning ${lang}`)


let fname = "bhagya"
let fullName = `Hi ${fname} kudupudi`
console.log(fullName)

//api
let env = "production";
let userId = 567;
const baseURL = `https://api-${env}.wipro.com/users/${userId}`
console.log(`Api url is: ${baseURL}`)

//webtables:
const rowIndex = 3
const colName = "email"
const result = `[data-row="${rowIndex}"] [data-col="${colName}"]`
console.log(result)
//await page.locator(result).click();

//logs
const testName = "LoginTest";
const status = "Failed"
const duration = 2.3
console.log(`${testName} has status: ${status} and executed for ${duration} minutes`)