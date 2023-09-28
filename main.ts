// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt (size:string= "large", message:string = "I love typescript") {
    return(`print message ${message} on ${size} size shirt.`)
}
// 
let result = make_shirt();

let result2 = make_shirt("medium");
console.log(result);
console.log(result2);