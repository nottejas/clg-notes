import React, { useEffect, useState } from "react";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("https://67b56c06a9acbdb38ed23b62.mockapi.io/students");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        setError("Failed to fetch student details.");
        console.error("ERROR FETCHING STUDENT DETAILS", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3 style={{ color: "red" }}>{error}</h3>;

  return (
    <div>
      <h2>STUDENT LIST</h2>
      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <ul>
          {students.map(student => (
            <li key={student.id}>
              <strong>{student.name}</strong> - Age: {student.age}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentList;
