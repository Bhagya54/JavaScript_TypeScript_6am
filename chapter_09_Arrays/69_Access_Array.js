let status=["pass","fail","skip","pass","fail"]
console.log(`Value at index 2: ${status[2]}`)//skip
console.log(status.at(-2))//pass
console.log(status.at(-10))//undefined

status[0]="skip";
console.log(status[0])


