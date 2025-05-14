const fs = require('fs');

const fileName = 'complaints.txt';
const complaint = "Issue with login module.\n";

if (fs.existsSync(fileName)) {
  fs.appendFileSync(fileName, complaint);
  console.log("Complaint added");
} else {
  fs.writeFileSync(fileName, complaint);
  console.log("Complaint file created and complaint added");
}
