import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddProductPage from './pages/AddProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import UpdateProductPage from './pages/UpdateProductPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>Product Catalog System</h1>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-product" element={<AddProductPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/update-product/:id" element={<UpdateProductPage />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>&copy; {new Date().getFullYear()} Product Catalog - MERN Stack</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
