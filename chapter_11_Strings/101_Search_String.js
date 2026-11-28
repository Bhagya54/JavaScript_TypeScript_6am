let url = "https://staging.vwo.com/api/login?locked=false&retry=false"

//includes
console.log(url.includes("staging"))//true

//startswith
console.log(url.startsWith("https:"))//true

//endsWith
console.log(url.endsWith("https:"))//false

//indexOf
console.log(url.indexOf("false"))//41
console.log(url.lastIndexOf("false"))//53

//search - reg exp
console.log(url.search(/api/))
console.log(url.search("api"))
