import React from 'react';
import './SortControl.css';

function SortControl({ onSort, currentSort, direction }) {
  return (
    <div className="sort-container">
      <label htmlFor="sort-select">Sort by:</label>
      <select 
        id="sort-select" 
        className="sort-select"
        value={currentSort}
        onChange={(e) => onSort(e.target.value)}
      >
        <option value="trackingId">Tracking ID</option>
        <option value="receiverName">Receiver Name</option>
        <option value="status">Status</option>
        <option value="estimatedDeliveryDate">Estimated Delivery Date</option>
      </select>
      <button 
        className="sort-direction" 
        onClick={() => onSort(currentSort)}
      >
        {direction === 'asc' ? '▲ Ascending' : '▼ Descending'}
      </button>
    </div>
  );
}

export default SortControl;
