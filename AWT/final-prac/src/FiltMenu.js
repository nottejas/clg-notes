import React from "react";

function FitMenu() {

  const restau = [
    { item: "Chicken Masala", type: "nonveg", price: 220 },
    { item: "Paneer", type: "veg", price: 220 },
    { item: "Soya", type: "veg", price: 290 },
  ];

  const filtTered = () => {
    return restau.filter(rest => rest.price <= 250);
  };

  const finalItems = filtTered(); // <-- call the function here

  return (
    <div>
      <h2>Menu Items under 250</h2>
      <ul>
        {finalItems.length > 0 ? (
          finalItems.map(restau => (
            <li key={restau.item}>
              item: {restau.item}, amt: {restau.price}
            </li>
          ))
        ) : (
          <li>No items found</li>
        )}
      </ul>
    </div>
  );
}

export default FitMenu;
