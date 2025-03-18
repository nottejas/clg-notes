import { useEffect, useState } from "react";
import { fetchData, saveData } from "./dataService";

function App() {

  const[users, setUsers] = useState([]);

  useEffect(() => {
    fetchData().then(data => {
      setUsers(data.users)
    })
  }, [])

  const addNewUser = () => {
    const newUser = { name: "Ronaldo", age: 40, city: "Madrid" }
    const updatedUsers = [...users, newUser]
    setUsers(updatedUsers)
  }

  const savedUserData = () => {
    const updatedData = { users };
    saveData(updatedData);
  }

  return (
    <div className="App">
      <h1>User List</h1>  
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user.name} - {user.age} - {user.city}</li>
        ))}
      </ul>
        <button onClick={addNewUser}>Add new User</button>
        <button onClick={savedUserData} style={{ marginLeft: '10px'}} >Save user data</button>
    </div>
  );
}

export default App;
