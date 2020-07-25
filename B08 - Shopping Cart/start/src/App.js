import React from 'react';
import { CartProvider } from './contexts/use-cart';
import Header from './components/Header';
import Product from './components/Product';
import products from './products';
import './App.css';

export default function App() {
  return (
    <CartProvider>
      <div className="app">
        {/* header */}
        <Header />

        <main>
          <div className="products-list">
            {products.map((product, index) => (
              <Product key={index} product={product} />
            ))}
          </div>
        </main>
      </div>
    </CartProvider>
  );
}
