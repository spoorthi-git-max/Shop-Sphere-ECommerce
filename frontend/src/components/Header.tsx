import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export function Header() {
  const { count } = useCart();
  return (
    <header className="header">
      <div className="container nav">
        <Link className="brand" to="/">Shop<span>Sphere</span></Link>
        <nav aria-label="Primary navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Shop</NavLink>
          <NavLink className="cart-link" to="/cart">Cart <span>{count}</span></NavLink>
        </nav>
      </div>
    </header>
  );
}