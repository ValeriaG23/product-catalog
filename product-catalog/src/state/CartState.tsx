import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../types/Product';

interface CartStateType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  totalPrice: number;
}

const CartState = createContext<CartStateType | undefined>(undefined);

export const CartStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <CartState.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalPrice }}>
      {children}
    </CartState.Provider>
  );
};

export const useCartState = (): CartStateType => {
  const state = useContext(CartState);
  if (!state) {
    throw new Error('useCartState must be used within a CartStateProvider');
  }
  return state;
};
