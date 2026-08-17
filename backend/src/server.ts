import express from "express";
import cors from "cors";
import { products } from "./data.js";

const app = express();
const PORT = Number(process.env.PORT ?? 4000);

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.get("/api/categories", (_req, res) => {
  res.json([...new Set(products.map((p) => p.category))].sort());
});

app.get("/api/products", (req, res) => {
  const search = String(req.query.search ?? "").trim().toLowerCase();
  const category = String(req.query.category ?? "").trim();
  const min = Number(req.query.min ?? 0);
  const max = Number(req.query.max ?? Number.MAX_SAFE_INTEGER);
  const sort = String(req.query.sort ?? "featured");

  let result = products.filter((p) =>
    (!search || `${p.name} ${p.description} ${p.brand}`.toLowerCase().includes(search)) &&
    (!category || p.category === category) &&
    p.price >= min &&
    p.price <= max
  );

  result = [...result].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    if (sort === "rating") return b.rating - a.rating;
    if (sort === "name") return a.name.localeCompare(b.name);
    return b.rating - a.rating;
  });

  res.json(result);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  return res.json(product);
});

app.use((_req, res) => res.status(404).json({ message: "API route not found" }));

app.listen(PORT, () => console.log(`ShopSphere API running on http://localhost:${PORT}`));

export default app;