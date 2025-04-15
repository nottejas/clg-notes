import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { productService } from '../services/api';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await productService.getProductById(id);
        setProduct(data);
        setError('');
      } catch (error) {
        console.error('Error fetching product details:', error);
        if (error.response && error.response.status === 404) {
          setError('Product not found');
        } else {
          setError('Failed to load product details. Please try again.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete "${product.name}"?`)) {
      try {
        await productService.deleteProduct(id);
        alert('Product deleted successfully');
        navigate('/');
      } catch (error) {
        console.error('Error deleting product:', error);
        alert('Failed to delete product. Please try again.');
      }
    }
  };

  if (loading) {
    return <div className="loading">Loading product details...</div>;
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-message">{error}</div>
        <Link to="/" className="back-button">Back to Product List</Link>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <h2>Product Details</h2>
      
      <div className="product-detail">
        <h3>{product.name}</h3>
        
        <div className="detail-row">
          <span className="detail-label">Category:</span>
          <span className="detail-value">{product.category}</span>
        </div>
        
        <div className="detail-row">
          <span className="detail-label">Price:</span>
          <span className="detail-value">${product.price.toFixed(2)}</span>
        </div>
        
        <div className="detail-row">
          <span className="detail-label">Stock:</span>
          <span className="detail-value">{product.stock}</span>
        </div>
        
        <div className="detail-row">
          <span className="detail-label">Description:</span>
          <p className="detail-description">{product.description}</p>
        </div>
      </div>
      
      <div className="product-actions">
        <Link to="/" className="back-button">
          Back to Product List
        </Link>
        <Link to={`/update-product/${product._id}`} className="update-button">
          Update Product
        </Link>
        <button onClick={handleDelete} className="delete-button">
          Delete Product
        </button>
      </div>
    </div>
  );
};

export default ProductDetail; 