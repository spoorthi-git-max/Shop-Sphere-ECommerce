import { describe, expect, it } from "vitest";
import { addToCart, cartSubtotal } from "./cart";
import type { Product } from "../types";

const product: Product = {
  id: "1", name: "Test", description: "Test", price: 10, category: "Test",
  image: "", rating: 5, stock: 5, brand: "Test", specifications: {}
};

describe("cart utilities", () => {
  it("adds a new product", () => expect(addToCart([], product)).toHaveLength(1));
  it("merges quantities", () => expect(addToCart(addToCart([], product), product)[0].quantity).toBe(2));
  it("calculates subtotal", () => expect(cartSubtotal([{...product, quantity: 3}])).toBe(30));
});