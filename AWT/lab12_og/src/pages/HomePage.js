import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="page-header">
        <h1>Product Catalog</h1>
        <Link to="/add-product" className="add-product-button">
          Add New Product
        </Link>
      </div>
      <ProductList />
    </div>
  );
};

export default HomePage; 