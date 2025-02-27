function fetchXml() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.xml', true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            const xmlDoc = xhr.responseXML;
            const students = xmlDoc.getElementsByTagName('student');
            
            let output = '<h2>Output is </h2>';
            for (let i = 0; i < students.length; i++) {
                const name = students[i].getElementsByTagName('name')[0].textContent;
                const age = students[i].getElementsByTagName('age')[0].textContent;
                output += `<p>Name: ${name} Age: ${age}</p>`;
            }
            document.getElementById('output').innerHTML = output;
        } else {
            document.getElementById('output').innerHTML = `<p>Error: ${xhr.status}</p>`;
        }
    };

    xhr.onerror = function() {
        console.error('Request error ....');
        document.getElementById('output').innerHTML = '<p>Failed to load the data</p>';
    };

    xhr.send();
}
