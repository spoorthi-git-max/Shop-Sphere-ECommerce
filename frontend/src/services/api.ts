import type { Product } from "../types";

const base = import.meta.env.VITE_API_URL ?? "/api";

async function request<T>(path: string): Promise<T> {
  const response = await fetch(`${base}${path}`);
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  return response.json() as Promise<T>;
}

export const getProducts = (params = "") => request<Product[]>(`/products${params}`);
export const getProduct = (id: string) => request<Product>(`/products/${id}`);
export const getCategories = () => request<string[]>("/categories");