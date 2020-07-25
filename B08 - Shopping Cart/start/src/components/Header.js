import React from 'react';
import CartIcon from '../supermarket.svg';

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="cart-button">
          <button>
            <img src={CartIcon} width="30" />({0})
          </button>
        </div>
      </div>
    </header>
  );
}
