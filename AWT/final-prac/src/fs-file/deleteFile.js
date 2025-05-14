const fs = require('fs');

const fileName = 'converted.txt';

if (fs.existsSync(fileName)) {
  fs.unlinkSync(fileName);
  console.log(`${fileName} deleted successfully.`);
} else {
  console.log("File doesn't exist.");
}
