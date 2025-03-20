import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function EmployeesDetails() {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/employees.json')
            .then(response => {
                if(!response.ok){
                    throw new Error("failed to fetch emp data")
                }
                return response.json()
            })
            .then(data => {
                const foundEmployee = data.find(emp => emp.id === parseInt(id))
                setEmployee(foundEmployee)
                setLoading(false) 
            })
            .catch(error => {
                setError(error.message)
                setLoading(false)
            })
    }, [id])

    if(loading) return <div>Loading emp details...</div>    
    if(error) return <div>error...{error}</div>    
    if(!employee){
        return (
            <div>
                <h2>Empl not found</h2>
                <Link to="/">Home</Link>
            </div>
        )
    }

  return (
    <div>
        <h1>{employee.name}-details</h1>
        <p><strong>id</strong>{employee.id}</p>

    </div>
  )
}

export default EmployeesDetails