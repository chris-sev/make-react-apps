import React, { createContext, useContext, useReducer } from 'react';
import products from '../products';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const initialState = { cart: [] };

function reducer(state, { type, payload }) {
  const { cart } = state;

  switch (type) {
    case 'ADD':
      return {
        ...state,
        cart: [...cart, products.find((p) => p.sku === payload)],
      };
    case 'REMOVE':
      const indexInCart = cart.findIndex((p) => p.sku === payload);
      const newCart = [...cart];
      newCart.splice(indexInCart, 1);
      return { ...state, cart: newCart };
    case 'EMPTY':
      return { cart: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [{ cart }, dispatch] = useReducer(reducer, initialState);

  const addItem = (sku) => dispatch({ type: 'ADD', payload: sku });
  const removeItem = (sku) => dispatch({ type: 'REMOVE', payload: sku });

  // more to implement
  // function incrementItem(id, quantity) {}
  // function decrementItem(id, quantity) {}
  // function setItemQuantity(id, quantity) {}

  // returns an array
  function findInCart(sku) {
    return cart.filter((product) => product.sku === sku) ?? [];
  }

  function totalPrice() {
    return groupCart().reduce((totalPrice, product) => {
      return totalPrice + product.price * product.quantity;
    }, 0);
  }

  function groupCart() {
    return cart.reduce((newCart, product) => {
      // check the array for the product
      const indexInCart = newCart.findIndex((p) => p.sku === product.sku);
      const isInCart = indexInCart !== -1;

      if (isInCart) {
        // if it already exists, increment the quantity
        newCart[indexInCart].quantity = newCart[indexInCart].quantity + 1;
        return newCart;
      }

      // if it doesnt exist, add it to the array
      newCart.push({ ...product, quantity: 1 });
      return newCart;
    }, []);
  }

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        findInCart,
        cart,
        cartGroupedByProduct: groupCart(),
        totalPrice: totalPrice(),
        cartCount: cart.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
