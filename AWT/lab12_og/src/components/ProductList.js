import React, { useState, useEffect } from 'react';
import { productService } from '../services/api';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [filters, setFilters] = useState({});

  useEffect(() => {
    loadProducts();
  }, [filters]);

  const loadProducts = async () => {
    setLoading(true);
    try {
      let data;
      if (searchQuery) {
        // If search query is provided, use search endpoint
        data = await productService.searchProducts({
          name: searchQuery,
          ...priceRange
        });
      } else {
        // Otherwise use regular getProducts with optional filters
        data = await productService.getAllProducts(filters);
      }
      setProducts(data);
      setError('');
    } catch (error) {
      console.error('Error loading products:', error);
      setError('Failed to load products. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    loadProducts();
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange({
      ...priceRange,
      [name]: value === '' ? '' : Number(value)
    });
  };

  const handleDelete = async (id) => {
    try {
      await productService.deleteProduct(id);
      setProducts(products.filter(product => product._id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product. Please try again.');
    }
  };

  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      
      <div className="search-filter-container">
        <form onSubmit={handleSearch} className="search-form">
          <div className="search-input-group">
            <input
              type="text"
              placeholder="Search by product name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="price-filters">
              <input
                type="number"
                placeholder="Min Price"
                name="minPrice"
                value={priceRange.minPrice}
                onChange={handlePriceChange}
                min="0"
              />
              <input
                type="number"
                placeholder="Max Price"
                name="maxPrice"
                value={priceRange.maxPrice}
                onChange={handlePriceChange}
                min="0"
              />
            </div>
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
      
      {loading ? (
        <div className="loading">Loading products...</div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : products.length === 0 ? (
        <div className="no-products">No products found</div>
      ) : (
        <div className="products-grid">
          {products.map(product => (
            <ProductItem 
              key={product._id} 
              product={product} 
              onDelete={handleDelete} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList; 