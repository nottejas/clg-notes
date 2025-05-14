import React, { useState } from 'react';

function ClothingStore() {
  const items = [
    { name: 'Shirt', price: 500 },
    { name: 'Pants', price: 600 },
    { name: 'Sweater', price: 700 }
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const [size, setSize] = useState('S');
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (e) => setSize(e.target.value);
  const handleQuantityChange = (e) => setQuantity(e.target.value);

  const handleItemChange = (e) => setSelectedItem(e.target.value);

  const selectedProduct = items.find(item => item.name === selectedItem);
  const total = selectedProduct ? selectedProduct.price * quantity : 0;

  return (
    <div>
      <h2>Clothing Store</h2>
      <div>
        <select onChange={handleItemChange}>
          <option value="">Select Item</option>
          {items.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        <select onChange={handleSizeChange}>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
        />
      </div>
      {selectedProduct && (
        <div>
          <h3>Total: ₹{total}</h3>
        </div>
      )}
    </div>
  );
}

export default ClothingStore;
