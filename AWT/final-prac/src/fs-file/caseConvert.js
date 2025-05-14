const fs = require('fs');
const readline = require('readline-sync');

const input = readline.question("Enter some text: ");
const upper = input.toUpperCase();

fs.writeFileSync("converted.txt", upper);
console.log("Text converted to upper case and saved to converted.txt");
