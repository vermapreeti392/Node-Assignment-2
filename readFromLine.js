const readline = require('readline');
const input = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
input.question("Please enter your name:", (greet)=>{
    console.log(`Hello ${greet}` );
    input.close();
})
