import React from 'react';
import { useCart } from '../contexts/use-cart';

export default function Product({ product }) {
  const { addItem, removeItem, findInCart } = useCart();
  const itemsInCart = findInCart(product.sku);
  const isInCart = itemsInCart.length;

  return (
    <div className="product">
      <img src={product.image_url} alt={product.name} />

      <h3>{product.name}</h3>

      <div className="product-buttons">
        {isInCart ? (
          <button className="remove" onClick={() => removeItem(product.sku)}>
            Remove
          </button>
        ) : (
          <div />
        )}

        <button className="add" onClick={() => addItem(product.sku)}>
          Add to Cart {isInCart && <>({itemsInCart.length})</>}
        </button>
      </div>
    </div>
  );
}
