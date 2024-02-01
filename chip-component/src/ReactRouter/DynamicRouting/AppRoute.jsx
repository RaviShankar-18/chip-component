import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import Category from "./Category";
import WishList from "./WishList";
import QueryParams from "../QueryParams";

function AppRoutes() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/" element={<QueryParams />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route
          path="/productDetails/:productId"
          element={<ProductDetails />}
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/wishList" element={<WishList />}></Route>
        <Route path="*" element={<div>404|page not found</div>}></Route>
      </Routes>
      <Link to="/"> Home </Link>
      <br />
      <Link to="/products">Products</Link>
      <br />
      <Link to="/productDetails/:productId">Product Details</Link>
      <br />
      <Link to="/category">Category</Link>
      <br />
      <Link to="/wishList">Wish List</Link>
      <br />
      <Link to="/cart">Cart</Link>
      <br />
      <Link to="/brokenLink">Broken Link</Link>
    </>
  );
}

export default AppRoutes;
