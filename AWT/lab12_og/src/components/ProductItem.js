import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ product, onDelete }) => {
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${product.name}"?`)) {
      onDelete(product._id);
    }
  };

  return (
    <div className="product-item">
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-stock">In Stock: {product.stock}</p>
      </div>
      
      <div className="product-actions">
        <Link to={`/product/${product._id}`} className="view-button">
          View Details
        </Link>
        <Link to={`/update-product/${product._id}`} className="update-button">
          Update
        </Link>
        <button onClick={handleDelete} className="delete-button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductItem; 