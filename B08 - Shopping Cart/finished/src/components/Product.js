import React from 'react';
import { useCart } from '../contexts/use-cart';

export default function Product({ product }) {
  const { addItem, removeItem, countItemsInCart } = useCart();

  return (
    <div className="product">
      {/* image */}
      <img src={product.image_url} alt={product.name} />

      {/* product name */}
      <h3>{product.name}</h3>

      {/* buttons */}
      <div className="product-buttons">
        {/* remove */}
        {countItemsInCart(product.sku) > 0 ? (
          <button className="remove" onClick={() => removeItem(product.sku)}>
            Remove
          </button>
        ) : (
          <div />
        )}

        {/* add */}
        <button className="add" onClick={() => addItem(product.sku)}>
          Add to Cart ({countItemsInCart(product.sku)})
        </button>
      </div>
    </div>
  );
}
