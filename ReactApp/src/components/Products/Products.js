import React from "react";
import { useState, useEffect, useContext } from "react";
import Product from "../Product/Product";
import "./Products.scss";
import { CartContext } from "../../context/CartContext";
import CartModal from "../CartModal/CartModal";
import Shimmer from "../Shimmer/Shimmer";
import { API_URL } from "../../utils/constants";
import Button from "../Button/Button";

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const { cartItems } = useContext(CartContext);

  // Toggle
  const toggle = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    setProducts(json);
  };

  return products.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="body__inner">
        <ul className="productItems">
          {products.map((product, index) => (
            <li key={index} className="productItem">
              <Product product={product} />
            </li>
          ))}
        </ul>
        <div>
          {!showModal && (
            <Button onClick={toggle} className="view-cart">
              View Cart ({cartItems.length})
            </Button>
          )}
        </div>
        <CartModal showModal={showModal} toggle={toggle} />
      </div>
    </div>
  );
};

export default Products;
