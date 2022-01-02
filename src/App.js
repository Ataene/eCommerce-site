import './App.css';
import Navbar from './Component/Navbar';
import Home from "./Component/Home";
import { Routes, Route } from "react-router-dom"
import Products from './Component/Products';
import Product from './Component/Product';
import Footer from './Component/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/products" element={<Products />} />
          <Route path = "/products/:id" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
