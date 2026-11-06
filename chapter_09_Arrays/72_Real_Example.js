let browser = ["chrome", "firefox", "safari", "opera", "edge"]
console.log("Length:", browser.length)//5

//Remove 1 element from end
browser.pop();
console.log(browser)//["chrome","firefox","safari","opera"]


browser.splice(browser.length - 1, 1)
console.log(browser)//[ 'chrome', 'firefox', 'safari' ]

//add an element at the end - push
browser.push("opera")
console.log(browser)//['chrome', 'firefox', 'safari','opera' ]




//remove last value - pop
//add an element at the beginning - unshift
//remove first value - shift
//replace,update the values based on the starting index,deleteCount,...values)
