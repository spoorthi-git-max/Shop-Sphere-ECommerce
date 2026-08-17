export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  stock: number;
  brand: string;
  specifications: Record<string, string>;
};

export type CartItem = Product & { quantity: number };