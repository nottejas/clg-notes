import React from 'react';

function SortOptions({ onSort }) {
  return (
    <div>
      <span>Sort by: </span>
      <button onClick={() => onSort('status')}>Status</button>
      <button onClick={() => onSort('date')}>Estimated Delivery Date</button>
    </div>
  );
}

export default SortOptions;