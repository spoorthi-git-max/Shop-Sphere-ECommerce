import { Link } from "react-router-dom";

export function Home() {
  return <div>
    <section className="hero"><div className="container hero-inner">
      <div><p className="eyebrow">CURATED FOR 2026</p><h1>Technology that fits your <em>everyday.</em></h1>
      <p className="hero-copy">Discover thoughtfully selected devices and accessories designed to make work, play and life feel effortless.</p>
      <div className="actions"><Link className="button" to="/products">Explore collection</Link><Link className="button secondary light" to="/products">Shop best sellers</Link></div></div>
      <div className="hero-card"><span>NEW</span><strong>Build your ideal setup.</strong><p>Premium tools, honest specs and fast discovery.</p></div>
    </div></section>
    <section className="container section"><div className="section-heading"><div><p className="eyebrow">WHY SHOPSPHERE</p><h2>Simple shopping. Better choices.</h2></div></div>
      <div className="feature-grid"><div><b>01</b><h3>Curated catalog</h3><p>Focused products with clear specs and useful details.</p></div><div><b>02</b><h3>Fast discovery</h3><p>Search, filter and sort without losing your place.</p></div><div><b>03</b><h3>Ready to ship</h3><p>Stock information stays visible before you add to cart.</p></div></div>
    </section>
    <section className="promo"><div className="container promo-inner"><div><p className="eyebrow">THE ESSENTIALS</p><h2>Upgrade the way you work and unwind.</h2></div><Link className="button light" to="/products">View products →</Link></div></section>
  </div>;
}