import React, { useState } from 'react';

function OfficeSupplyPortal() {
  const [penQty, setPenQty] = useState(0);
  const [notebookQty, setNotebookQty] = useState(0);

  const penPrice = 20;
  const notebookPrice = 50;

  const handlePenChange = (e) => setPenQty(Number(e.target.value));
  const handleNotebookChange = (e) => setNotebookQty(Number(e.target.value));

  const total = penQty * penPrice + notebookQty * notebookPrice;

  return (
    <div>
      <h2>Office Supplies Cart</h2>
      <div>
        <label>Pen:</label>
        <input
          type="number"
          value={penQty}
          onChange={handlePenChange}
          min="0"
        />
      </div>
      <div>
        <label>Notebook:</label>
        <input
          type="number"
          value={notebookQty}
          onChange={handleNotebookChange}
          min="0"
        />
      </div>
      <h3>Total: ₹{total}</h3>
    </div>
  );
}

export default OfficeSupplyPortal;
