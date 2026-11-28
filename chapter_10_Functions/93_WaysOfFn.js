//Normal Fn
//statusCode >=200 and <300 - 
validateStatusCode(203)
function validateStatusCode(statusCode) {
    if (statusCode >= 200 && statusCode < 300) {
        console.log("Status Code Verification - Normal Fn - API is working fine", statusCode)
    }
}

//Function Expression
const validate_UsingFnExp = function (statusCode) {
    if (statusCode >= 200 && statusCode < 300) {
        console.log("Status Code Verification - Fn Expression - API is working fine", statusCode)
    }
}
validate_UsingFnExp(205)

//Arrow Fn
const validate_UsingArrowFn = (statusCode) => {
    if (statusCode >= 200 && statusCode < 300) {
        console.log("Status Code Verification - Arrow Fn - API is working fine", statusCode)
    }
}
validate_UsingArrowFn(201)