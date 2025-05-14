import React, { useEffect, useState } from "react";

function LabTestReports() {
  const [labTests, setLabTests] = useState([]);

  useEffect(() => {
    fetch("/labtests.json")
      .then((res) => res.json())
      .then((data) => setLabTests(data))
      .catch((err) => console.log("eeror", err));
  });

  return (
    <div>
      <h2>Lab Test Reports</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>Patient N</th>
                    <th>Test type</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
                {labTests.map((test, index)=>(
                   <tr key={index}>
                    <li>{test.pa}</li>
                   </tr> 
                ))}
            </tbody>
        </table>
    </div>
  );
}

export default LabTestReports;
