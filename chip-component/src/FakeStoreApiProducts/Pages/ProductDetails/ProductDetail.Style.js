import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const ProductCard = styled.div`
  display: flex;
  padding: 12px;
  flex-direction: column;
  width: 200px;
  height: 200px;
  border: 1px solid silver;
  align-items: center;
`;

export const ProductCardImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const ProductTitle = styled.p`
  font-size: 12px;
  font-weight: bold;
`;
