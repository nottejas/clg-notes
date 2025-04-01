import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm';

const AddProductPage = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    alert('Product added successfully!');
    navigate('/');
  };

  return (
    <div className="add-product-page">
      <div className="page-header">
        <h1>Add New Product</h1>
        <Link to="/" className="back-button">
          Back to Product List
        </Link>
      </div>
      <ProductForm onSubmitSuccess={handleSuccess} mode="add" />
    </div>
  );
};

export default AddProductPage; 