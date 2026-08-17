import type { CartItem, Product } from "../types";

export function addToCart(items: CartItem[], product: Product, quantity = 1): CartItem[] {
  const existing = items.find((item) => item.id === product.id);
  if (existing) {
    return items.map((item) => item.id === product.id
      ? { ...item, quantity: Math.min(item.quantity + quantity, product.stock) }
      : item);
  }
  return [...items, { ...product, quantity: Math.min(quantity, product.stock) }];
}

export function cartSubtotal(items: CartItem[]) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}