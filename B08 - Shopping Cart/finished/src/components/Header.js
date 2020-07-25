import React, { useState, useRef } from 'react';
import CartIcon from '../supermarket.svg';
import useOnClickOutside from 'use-onclickoutside';
import { useCart } from '../contexts/use-cart';
import Cart from './Cart';

export default function Header() {
  const { cart } = useCart();

  const modalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // close the modal if we click outside of it
  useOnClickOutside(modalRef, () => setIsOpen(false));

  return (
    <header>
      <div className="container">
        <div className="cart-button">
          <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
            <img src={CartIcon} width="30" />({cart.length})
          </button>

          {/* show a modal */}
          <div
            ref={modalRef}
            className="cart-modal"
            style={{ display: isOpen ? 'block' : 'none' }}
          >
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
}
