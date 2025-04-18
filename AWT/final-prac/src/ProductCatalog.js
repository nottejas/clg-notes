import React, { useEffect, useState } from 'react'

function ProductCatalog() {

    const [products, setProducts] = useState([])
    const [selectedID, setSelectedID] = useState(null)

    // fetching
    useEffect(() => {
        const storedID = JSON.parse(localStorage.getItem('productID'))
        if(storedID){
            setSelectedID(storedID);
        }

        fetch('/products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
        .catch(err => {
            console.log("Error fetching", err);
        })
    }, [])

    const handleSelect = (id) => {
        setSelectedID(id);
        localStorage.setItem('productID', JSON.stringify(id))
    }

  return (
    <div>
        <h2>ProductCatalog</h2>
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    ID: {product.id} name: {product.name} category: {product.category}
                    <button onClick={() => handleSelect(product.id)}> 
                        {selectedID === product.id ? "Selcted": "Select"}
                    </button>
                    <br />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ProductCatalog