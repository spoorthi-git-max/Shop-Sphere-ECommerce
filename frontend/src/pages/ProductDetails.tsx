import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../services/api";
import type { Product } from "../types";
import { useCart } from "../context/CartContext";
import { Loading } from "../components/Loading";

export function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { add } = useCart();

  useEffect(() => { if (id) getProduct(id).then(setProduct).catch(() => setError("Product not found.")).finally(() => setLoading(false)); }, [id]);
  if (loading) return <Loading label="Loading product..." />;
  if (error || !product) return <div className="container state error"><h2>Product not found</h2><Link to="/products" className="button">Back to shop</Link></div>;

  return <section className="container section detail">
    <Link to="/products" className="back">← Back to collection</Link>
    <div className="detail-grid">
      <div className="detail-image"><img src={product.image} alt={product.name} width="900" height="900" /></div>
      <div className="detail-copy"><p className="eyebrow">{product.brand} · {product.category}</p><h1>{product.name}</h1><div className="rating large">★ {product.rating}</div><p className="detail-description">{product.description}</p>
        <div className="price-large">${product.price.toFixed(2)}</div><p className="stock">{product.stock} in stock</p>
        <div className="quantity"><button onClick={() => setQuantity(q => Math.max(1, q - 1))}>−</button><span>{quantity}</span><button onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}>+</button></div>
        <button className="button" onClick={() => add(product, quantity)}>Add {quantity} to cart</button>
        <div className="specs"><h3>Specifications</h3>{Object.entries(product.specifications).map(([k, v]) => <div key={k}><span>{k}</span><b>{v}</b></div>)}</div>
      </div>
    </div>
  </section>;
}