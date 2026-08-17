import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AppLayout } from "./layouts/AppLayout";
import { Home } from "./pages/Home";
import { Loading } from "./components/Loading";

const Products = lazy(() => import("./pages/Products").then(m => ({ default: m.Products })));
const ProductDetails = lazy(() => import("./pages/ProductDetails").then(m => ({ default: m.ProductDetails })));
const Cart = lazy(() => import("./pages/Cart").then(m => ({ default: m.Cart })));
const NotFound = lazy(() => import("./pages/NotFound").then(m => ({ default: m.NotFound })));

export default function App() {
  return <BrowserRouter><CartProvider><Suspense fallback={<Loading />}><Routes>
    <Route element={<AppLayout />}><Route path="/" element={<Home />} /><Route path="/products" element={<Products />} /><Route path="/products/:id" element={<ProductDetails />} /><Route path="/cart" element={<Cart />} /><Route path="*" element={<NotFound />} /></Route>
  </Routes></Suspense></CartProvider></BrowserRouter>;
}