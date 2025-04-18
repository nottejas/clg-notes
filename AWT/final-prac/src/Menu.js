function Menu(){
    // item type veg/non-veg ,price. display only those items whose price is less than 250.

    const restau = [
        { item: "Chicken Masala", type: "nonveg", price: 220 },
        { item: "Paneer", type: "veg", price: 220 },
        { item: "Soya", type: "veg", price: 290 },
    ]

    const filteredThings = () => {
        return restau.filter(rest => rest.price <= 250)
    }

    const final = filteredThings()

    return (
        <div>
            <h2>Items</h2>
            <ul>
                {final.length > 0 ? (
                    final.map(restau => (
                        <li key={restau.item}>
                            Item {restau.item} amount {restau.price}
                        </li>
                    ))
                ) : (
                    <li>nothing found</li>
                )} 
            </ul>
        </div>
    )
}

export default Menu;

