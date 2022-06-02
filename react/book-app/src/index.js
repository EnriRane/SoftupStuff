import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CartProvider } from './context/CartContext';
import { BookProvider } from './context/BookContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </BookProvider>
  </React.StrictMode>
);
