import { Link } from "react-router-dom";
import type { Product } from "../types";
import { useCart } from "../context/CartContext";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  return <article className="product-card">
    <Link to={`/products/${product.id}`} className="product-image-wrap">
      <img src={product.image} alt={product.name} loading="lazy" width="900" height="900" />
      <span className="badge">{product.category}</span>
    </Link>
    <div className="product-body">
      <p className="eyebrow">{product.brand}</p>
      <Link to={`/products/${product.id}`}><h3>{product.name}</h3></Link>
      <p className="muted">{product.description}</p>
      <div className="rating">★ {product.rating}</div>
      <div className="product-row"><strong>${product.price.toFixed(2)}</strong>
        <button className="small-button" onClick={() => add(product)} disabled={product.stock === 0}>Add to cart</button>
      </div>
    </div>
  </article>;
}