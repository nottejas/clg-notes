const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Add a new product
router.post('/add-product', productController.addProduct);

// Get all products
router.get('/products', productController.getProducts);

// Get product by ID
router.get('/product/:id', productController.getProductById);

// Update product by ID
router.put('/update-product/:id', productController.updateProduct);

// Delete product by ID
router.delete('/delete-product/:id', productController.deleteProduct);

// Search products
router.get('/search', productController.searchProducts);

module.exports = router; 