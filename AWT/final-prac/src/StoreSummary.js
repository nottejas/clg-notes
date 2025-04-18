import React from 'react'

// (a) props-> create a component(functional/class)- storeSummary and this component stores multiple branches which is used as props. Display store name, city and monthly revenue(use map)

function StoreSummary(props) {

    const { branches } = props

  return (
    <div>
        <h2>Store</h2>
        <ul>
            {branches.map((branch, index) => (
                <li key={index} 
                > Store: {branch.name} revenue: {branch.revenue}</li>
            ))}
        </ul>
    </div>
  )
}

export default StoreSummary