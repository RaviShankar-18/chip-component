import React from "react";
import { useParams } from "react-router-dom";
import phonesDB from "./PhoneDB";

const ProductDetails = () => {
  const { productId } = useParams();
  console.log("productId from URL:", productId);

  const foundProduct = phonesDB.data.find((products) => {
    return products.id === productId;
  });
  console.log("foundProduct:", foundProduct);
  if (!foundProduct) {
    return <div>Product Not found for the given id</div>;
  }
  const { id, name, price, details } = foundProduct;
  return (
    <>
      <div>ProductDetails</div>
      <div>{productId}</div>
      <div key={id}>
        <li>{name}</li>
        <li>{price}</li>
        <li>{details}</li>
      </div>
    </>
  );
};

export default ProductDetails;
