export function Loading({ label = "Loading..." }: { label?: string }) {
  return <div className="state"><div className="spinner" aria-hidden="true" /><p>{label}</p></div>;
}