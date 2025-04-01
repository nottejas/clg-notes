import axios from 'axios';

// Create axios instance with base URL and default headers
const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Product API methods
export const productService = {
  // Get all products
  getAllProducts: async (filters = {}) => {
    try {
      const response = await api.get('/products', { params: filters });
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  // Get product by ID
  getProductById: async (id) => {
    try {
      const response = await api.get(`/product/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  },

  // Add a new product
  addProduct: async (productData) => {
    try {
      const response = await api.post('/add-product', productData);
      return response.data;
    } catch (error) {
      console.error('Error adding product:', error);
      throw error;
    }
  },

  // Update a product
  updateProduct: async (id, productData) => {
    try {
      const response = await api.put(`/update-product/${id}`, productData);
      return response.data;
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  },

  // Delete a product
  deleteProduct: async (id) => {
    try {
      const response = await api.delete(`/delete-product/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  },

  // Search products
  searchProducts: async (searchParams) => {
    try {
      const response = await api.get('/search', { params: searchParams });
      return response.data;
    } catch (error) {
      console.error('Error searching products:', error);
      throw error;
    }
  }
};

export default api; 