import {Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";

import { CartContextProvider } from "./cartContext";
import Checkout from "./components/Checkout";

export default function App() {
  return (
    <CartContextProvider>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop/:category" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </CartContextProvider>
  )
}
