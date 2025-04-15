import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import { productService } from '../services/api';

const UpdateProductPage = () => {
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
        console.error('Error fetching product:', error);
        if (error.response && error.response.status === 404) {
          setError('Product not found');
        } else {
          setError('Failed to load product. Please try again.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSuccess = () => {
    alert('Product updated successfully!');
    navigate(`/product/${id}`);
  };

  if (loading) {
    return <div className="loading">Loading product...</div>;
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
    <div className="update-product-page">
      <div className="page-header">
        <h1>Update Product</h1>
        <div className="header-buttons">
          <Link to="/" className="back-to-list">
            Back to Product List
          </Link>
          <Link to={`/product/${id}`} className="back-to-detail">
            Back to Product Details
          </Link>
        </div>
      </div>
      <ProductForm 
        product={product} 
        onSubmitSuccess={handleSuccess} 
        mode="update" 
      />
    </div>
  );
};

export default UpdateProductPage; 