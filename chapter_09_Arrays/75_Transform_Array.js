let scores = [45, 85, 91, 60, 73]
//map
//grade : Pass/Fail - score>70

let gradedArray = scores.map(score => (score > 70) ? "PASS" : "FAIL")
console.log(scores)
console.log(gradedArray)

//filter - filters the values based on the condition
let passedScores = scores.filter(score => score > 70)
console.log(`Passed Scores are: ${passedScores}`)

//reduce - accumulated result - single value - sum of all the values of an array - 
let totalSum = scores.reduce((a, b) => a + b,5)
console.log(totalSum)
/*
a=45,b=85 = 130
a=130,b=91 = 221
a=221,b=60 = 281
a=281,b=73 = 354
*/

/*
a=5,b=45 > 50
a=50,b=85 > 135
a=135,b=91 > 226
a=226,b=60 >286
a=286 , b=73 > 359
*/
