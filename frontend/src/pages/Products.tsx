import { useEffect, useMemo, useState } from "react";
import { getCategories, getProducts } from "../services/api";
import type { Product } from "../types";
import { ProductCard } from "../components/ProductCard";
import { Filters } from "../components/Filters";
import { Loading } from "../components/Loading";

export function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [filters, setFilters] = useState({ search: "", category: "", min: "", max: "", sort: "featured" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => { getCategories().then(setCategories).catch(() => setError("Could not load categories.")); }, []);
  useEffect(() => {
    setLoading(true); setError("");
    const qs = new URLSearchParams(Object.entries(filters).filter(([, v]) => v) as [string, string][]).toString();
    getProducts(qs ? `?${qs}` : "").then(setProducts).catch(() => setError("We couldn't load products. Please try again.")).finally(() => setLoading(false));
  }, [filters]);

  const countLabel = useMemo(() => `${products.length} product${products.length === 1 ? "" : "s"}`, [products.length]);
  const change = (key: string, value: string) => setFilters(f => ({ ...f, [key]: value }));
  return <section className="container section">
    <div className="page-heading"><div><p className="eyebrow">THE COLLECTION</p><h1>Find your next favorite.</h1><p className="muted">Curated technology, accessories and everyday upgrades.</p></div><span className="result-count">{countLabel}</span></div>
    <Filters {...filters} categories={categories} onChange={change} onClear={() => setFilters({ search: "", category: "", min: "", max: "", sort: "featured" })} />
    {loading ? <Loading label="Finding the best matches..." /> : error ? <div className="state error"><h3>Something went wrong</h3><p>{error}</p></div> : products.length === 0 ? <div className="state"><h3>No products found</h3><p>Try removing a filter or searching for something else.</p></div> :
      <div className="product-grid">{products.map(product => <ProductCard key={product.id} product={product} />)}</div>}
  </section>;
}