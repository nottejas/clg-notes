const fs = require("fs")
const readline = require("readline-sync")

const input = readline.question('enter some text: ') 
const upper = input.toUpperCase();

fs.writeFileSync("converted.txt", upper)
console.log('Converted');
    
