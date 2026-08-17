type Props = {
  search: string; category: string; min: string; max: string; sort: string;
  categories: string[]; onChange: (key: string, value: string) => void; onClear: () => void;
};

export function Filters({ search, category, min, max, sort, categories, onChange, onClear }: Props) {
  return <section className="filters" aria-label="Product filters">
    <label>Search<input value={search} onChange={(e) => onChange("search", e.target.value)} placeholder="Search products..." /></label>
    <label>Category<select value={category} onChange={(e) => onChange("category", e.target.value)}><option value="">All categories</option>{categories.map(c => <option key={c}>{c}</option>)}</select></label>
    <label>Min price<input type="number" min="0" value={min} onChange={(e) => onChange("min", e.target.value)} /></label>
    <label>Max price<input type="number" min="0" value={max} onChange={(e) => onChange("max", e.target.value)} /></label>
    <label>Sort<select value={sort} onChange={(e) => onChange("sort", e.target.value)}><option value="featured">Featured</option><option value="price-asc">Price: Low to high</option><option value="price-desc">Price: High to low</option><option value="rating">Top rated</option><option value="name">Name</option></select></label>
    <button className="button secondary" onClick={onClear}>Clear</button>
  </section>;
}