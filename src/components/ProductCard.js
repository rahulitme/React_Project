import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  width: 200px;
  text-align: center;
`;

const Button = styled.button`
  background: #28a745;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
`;

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <img src={product.image} alt={product.title} width="100" />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <Button onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>
    </Card>
  );
};

export default ProductCard;
