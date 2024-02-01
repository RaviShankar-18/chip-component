import axios from "axios";
import { useState, useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import {
  ProductCard,
  ProductCardImage,
  ProductTitle,
  ProductsContainer,
} from "./ProductDetail.Style.js";
const ProductDetails = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const apiData = await axios.get("https://fakestoreapi.com/products");
      setProducts(apiData.data);
      setLoading(false);
    })();
  }, []);

  console.log(products);

  return (
    <>
      <FadeLoader color="#36d7b7" loading={loading} />
      <ProductsContainer>
        {products &&
          products.map((products) => {
            return (
              <ProductCard key={products.id}>
                <ProductCardImage src={products.image} />
                <ProductTitle>Price : {products.price}</ProductTitle>
                <ProductTitle>{products.title}</ProductTitle>
                {/* <ProductTitle>{products.description}</ProductTitle> */}
              </ProductCard>
            );
          })}
      </ProductsContainer>
    </>
  );
};

export default ProductDetails;
