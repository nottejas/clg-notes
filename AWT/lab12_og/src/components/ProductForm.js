import React, { useState, useEffect } from 'react';
import { productService } from '../services/api';

const ProductForm = ({ product, onSubmitSuccess, mode = 'add' }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    category: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // If product is provided (for update mode), populate the form
  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || '',
        description: product.description || '',
        price: product.price || '',
        stock: product.stock || '',
        category: product.category || ''
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear field-specific error when field is changed
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Product name is required';
    }
    
    // Description validation
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    // Price validation
    if (!formData.price) {
      newErrors.price = 'Price is required';
    } else if (isNaN(formData.price) || Number(formData.price) <= 0) {
      newErrors.price = 'Price must be a positive number';
    }
    
    // Stock validation
    if (formData.stock === '') {
      newErrors.stock = 'Stock is required';
    } else if (isNaN(formData.stock) || Number(formData.stock) < 0) {
      newErrors.stock = 'Stock must be a non-negative number';
    }
    
    // Category validation
    if (!formData.category.trim()) {
      newErrors.category = 'Category is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Convert price and stock to numbers
    const processedData = {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock)
    };
    
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError('');
      
      try {
        if (mode === 'add') {
          await productService.addProduct(processedData);
        } else {
          await productService.updateProduct(product._id, processedData);
        }
        
        // Reset form if adding a new product
        if (mode === 'add') {
          setFormData({
            name: '',
            description: '',
            price: '',
            stock: '',
            category: ''
          });
        }
        
        if (onSubmitSuccess) {
          onSubmitSuccess();
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        
        // Handle API error response
        if (error.response && error.response.data && error.response.data.message) {
          setSubmitError(error.response.data.message);
        } else {
          setSubmitError('An error occurred. Please try again.');
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="product-form">
      <h2>{mode === 'add' ? 'Add New Product' : 'Update Product'}</h2>
      
      {submitError && (
        <div className="error-message">{submitError}</div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter product name"
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter product description"
            rows="3"
          />
          {errors.description && <div className="error">{errors.description}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            min="0.01"
            step="0.01"
          />
          {errors.price && <div className="error">{errors.price}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            placeholder="Enter stock quantity"
            min="0"
            step="1"
          />
          {errors.stock && <div className="error">{errors.stock}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Enter product category"
          />
          {errors.category && <div className="error">{errors.category}</div>}
        </div>
        
        <button 
          type="submit" 
          className="submit-button" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : (mode === 'add' ? 'Add Product' : 'Update Product')}
        </button>
      </form>
    </div>
  );
};

export default ProductForm; 