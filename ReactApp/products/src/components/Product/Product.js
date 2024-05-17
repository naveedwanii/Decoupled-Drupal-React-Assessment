import React from "react";
import "./Product.scss";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { IMAGE_URL } from "../../utils/constants";
import Button from "../Button/Button";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const {
    field_product_name,
    field_product_image,
    field_product_selling_price,
  } = product;
  return (
    <>
      <img src={IMAGE_URL + field_product_image} className="image" />
      <div className="product-card">
        <h3>{field_product_name}</h3>
        <div className="product-card__footer">
          <span>${field_product_selling_price}</span>
          <Button
            onClick={() => addToCart(product)}
            className="product-card__button"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default Product;
