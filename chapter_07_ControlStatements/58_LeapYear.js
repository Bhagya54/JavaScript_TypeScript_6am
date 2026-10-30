let year = 1000;
// leap year:
/*
1. divisible by 4 and not divisible by 100
2. divisible by 400
*/

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap Year:", year)
}
else {
    console.log("Not Leap Year:", year)
}