import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export function Cart() {
  const { items, subtotal, update, remove } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const shipping = subtotal > 100 || subtotal === 0 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (!items.length) return <section className="container state section"><p className="eyebrow">YOUR BAG</p><h1>Your cart is empty.</h1><p className="muted">Find something you'll love and add it here.</p><Link className="button" to="/products">Start shopping</Link></section>;

  function completeDemoOrder(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOrderPlaced(true);
  }

  return <>
    <section className="container section"><div className="page-heading"><div><p className="eyebrow">YOUR BAG</p><h1>Ready when you are.</h1></div></div>
      <div className="cart-layout"><div className="cart-list">{items.map(item => <article className="cart-item" key={item.id}>
        <img src={item.image} alt="" width="160" height="160" /><div className="cart-info"><Link to={`/products/${item.id}`}><h3>{item.name}</h3></Link><p className="muted">{item.brand}</p><strong>${item.price.toFixed(2)}</strong>
        <div className="cart-controls"><div className="quantity"><button aria-label={`Decrease ${item.name} quantity`} onClick={() => update(item.id, item.quantity - 1)}>−</button><span>{item.quantity}</span><button aria-label={`Increase ${item.name} quantity`} onClick={() => update(item.id, item.quantity + 1)}>+</button></div><button className="text-button" onClick={() => remove(item.id)}>Remove</button></div></div>
      </article>)}</div>
      <aside className="summary"><h2>Summary</h2><div><span>Subtotal</span><b>${subtotal.toFixed(2)}</b></div><div><span>Shipping</span><b>{shipping ? `$${shipping.toFixed(2)}` : "Free"}</b></div><div><span>Estimated tax</span><b>${tax.toFixed(2)}</b></div><hr/><div className="total"><span>Total</span><b>${total.toFixed(2)}</b></div><button className="button full" onClick={() => { setOrderPlaced(false); setCheckoutOpen(true); }}>Checkout</button><p className="tiny">Demo checkout. No payment is processed.</p></aside></div>
    </section>

    {checkoutOpen && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setCheckoutOpen(false); }}>
      <section className="checkout-modal" role="dialog" aria-modal="true" aria-labelledby="checkout-title">
        <button className="modal-close" aria-label="Close checkout" onClick={() => setCheckoutOpen(false)}>×</button>
        {orderPlaced ? <div className="checkout-success"><div className="success-icon">✓</div><p className="eyebrow">ORDER CONFIRMED</p><h2>You're all set.</h2><p className="muted">This is a demo checkout, so no payment was processed. Your order total would be <strong>${total.toFixed(2)}</strong>.</p><button className="button full" onClick={() => setCheckoutOpen(false)}>Continue shopping</button></div> : <>
          <p className="eyebrow">SECURE CHECKOUT</p><h2 id="checkout-title">Complete your order</h2><p className="muted">Demo form for the capstone project. Connect Stripe, PayPal or another provider here for real payments.</p>
          <form className="checkout-form" onSubmit={completeDemoOrder}>
            <label>Full name<input required autoComplete="name" placeholder="Alex Morgan" /></label>
            <label>Email<input required type="email" autoComplete="email" placeholder="alex@example.com" /></label>
            <label>Shipping address<input required autoComplete="street-address" placeholder="123 Market Street" /></label>
            <div className="checkout-two"><label>City<input required autoComplete="address-level2" placeholder="San Francisco" /></label><label>Postal code<input required autoComplete="postal-code" placeholder="94105" /></label></div>
            <div className="checkout-total"><span>Total</span><strong>${total.toFixed(2)}</strong></div>
            <button className="button full" type="submit">Place demo order</button>
          </form>
        </>}
      </section>
    </div>}
  </>;
}
