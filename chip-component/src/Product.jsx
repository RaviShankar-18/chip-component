// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  console.log(products);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route
          path="/products/:id"
          element={<ProductDetail products={products} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Product;
