const fs = require('fs');

const result = "Student: Tejas, Marks: 85\n";
fs.appendFileSync("school.txt", result);
console.log("Result added");
