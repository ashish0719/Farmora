"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product, qty = 1, weight = "") => {
    const existing = cart.find(
      (item) => item.id === product.id && item.weight === weight,
    );

    if (existing) {
      increaseQty(product.id, weight, qty);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          weight,
          quantity: qty,
        },
      ]);
    }
  };

  const increaseQty = (id, weight) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.weight === weight
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  const decreaseQty = (id, weight) => {
    setCart(
      cart
        .map((item) =>
          item.id === id && item.weight === weight
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id, weight) => {
    setCart(cart.filter((item) => !(item.id === id && item.weight === weight)));
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        totalItems,
        totalPrice,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
