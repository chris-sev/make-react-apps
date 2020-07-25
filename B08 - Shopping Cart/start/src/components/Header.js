import React, { useState, useRef } from 'react';
import CartIcon from '../supermarket.svg';
import Cart from '../components/Cart';
import { useCart } from '../contexts/use-cart';
import useOnClickOutside from 'use-onclickoutside';

// image link: https://i.imgur.com/9HKkggh.png

export default function Header() {
  const modalRef = useRef();
  const { cartCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  useOnClickOutside(modalRef, () => {
    if (isOpen === true) setIsOpen(false);
  });

  return (
    <header>
      <div className="container">
        <div className="cart-button">
          <button onClick={() => setIsOpen(true)}>
            <img src={CartIcon} width="30" />({cartCount})
          </button>

          <div
            className="cart-modal"
            ref={modalRef}
            style={{ display: isOpen ? 'block' : 'none', color: 'red' }}
          >
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
}
