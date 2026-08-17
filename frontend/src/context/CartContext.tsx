import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { CartItem, Product } from "../types";
import { addToCart, cartSubtotal } from "../utils/cart";

type CartContextValue = {
  items: CartItem[];
  count: number;
  subtotal: number;
  add: (product: Product, quantity?: number) => void;
  update: (id: string, quantity: number) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try { return JSON.parse(localStorage.getItem("shopsphere-cart") ?? "[]") as CartItem[]; }
    catch { return []; }
  });

  useEffect(() => localStorage.setItem("shopsphere-cart", JSON.stringify(items)), [items]);

  const value = useMemo(() => ({
    items,
    count: items.reduce((sum, item) => sum + item.quantity, 0),
    subtotal: cartSubtotal(items),
    add: (product: Product, quantity = 1) => setItems((current) => addToCart(current, product, quantity)),
    update: (id: string, quantity: number) => setItems((current) => current.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, Math.min(quantity, item.stock)) } : item)),
    remove: (id: string) => setItems((current) => current.filter((item) => item.id !== id)),
    clear: () => setItems([])
  }), [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}