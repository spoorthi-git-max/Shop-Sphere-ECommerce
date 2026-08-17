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

export const products: Product[] = [
  {
    id: "aurora-headphones",
    name: "Aurora Wireless Headphones",
    description: "Premium wireless headphones with adaptive noise cancellation and all-day comfort.",
    price: 149.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    rating: 4.8,
    stock: 24,
    brand: "Aurora",
    specifications: { Battery: "40 hours", Connectivity: "Bluetooth 5.3", Weight: "245g" }
  },
  {
    id: "pixelwatch-pro",
    name: "PixelWatch Pro",
    description: "A sleek smartwatch with fitness tracking, notifications and a bright AMOLED display.",
    price: 229,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    rating: 4.6,
    stock: 17,
    brand: "Pixel",
    specifications: { Display: "1.8 AMOLED", Battery: "7 days", WaterResistance: "5 ATM" }
  },
  {
    id: "nova-camera",
    name: "Nova Mirrorless Camera",
    description: "Compact mirrorless camera designed for creators who want crisp photos and cinematic video.",
    price: 899,
    category: "Cameras",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80",
    rating: 4.9,
    stock: 8,
    brand: "Nova",
    specifications: { Sensor: "24.2 MP", Video: "4K 60fps", Mount: "NX" }
  },
  {
    id: "orbit-laptop",
    name: "Orbit Creator Laptop",
    description: "Powerful 14-inch laptop for development, design and everyday productivity.",
    price: 1299,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
    rating: 4.7,
    stock: 11,
    brand: "Orbit",
    specifications: { CPU: "8-core", RAM: "16 GB", Storage: "1 TB SSD" }
  },
  {
    id: "terra-speaker",
    name: "Terra Smart Speaker",
    description: "Room-filling smart speaker with rich sound and voice controls.",
    price: 89,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=900&q=80",
    rating: 4.4,
    stock: 31,
    brand: "Terra",
    specifications: { Audio: "360°", WiFi: "Dual-band", Assistant: "Built-in" }
  },
  {
    id: "flux-keyboard",
    name: "Flux Mechanical Keyboard",
    description: "Low-profile mechanical keyboard with hot-swappable switches and RGB backlight.",
    price: 119,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80",
    rating: 4.5,
    stock: 42,
    brand: "Flux",
    specifications: { Layout: "75%", Switches: "Hot-swap", Connection: "USB-C / BT" }
  },
  {
    id: "luma-phone",
    name: "Luma X Smartphone",
    description: "Flagship smartphone with a vivid display, fast processor and versatile camera system.",
    price: 799,
    category: "Phones",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
    rating: 4.7,
    stock: 19,
    brand: "Luma",
    specifications: { Display: "6.7 OLED", Storage: "256 GB", Camera: "50 MP" }
  },
  {
    id: "zen-desk",
    name: "Zen Desk Lamp",
    description: "Minimal LED desk lamp with adjustable temperature and brightness.",
    price: 59,
    category: "Home",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80",
    rating: 4.3,
    stock: 50,
    brand: "Zen",
    specifications: { Power: "12W LED", Modes: "4", Control: "Touch" }
  }
];