// ProductDetail.js
import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Product Detail</h2>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default ProductDetail;
