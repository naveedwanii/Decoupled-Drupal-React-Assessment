import React from "react";
import { useState, useEffect, useContext } from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./Body.scss";
import { CartContext } from "../../context/CartContext";
import CartPage from "../CartPage/CartPage";
import Shimmer from "../Shimmer/Shimmer";
import { API_URL } from "../../utils/constants";

const Body = () => {
  const [showModal, setShowModal] = useState(false);
  const [productItems, setProductItems] = useState([]);
  const { cartItems, addToCart } = useContext(CartContext);

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
    console.log(json);
    setProductItems(json);
  };

  return productItems.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="body__inner">
        <ul className="productItems">
          {productItems.map((product, index) => (
            <li key={index} className="productItem">
              <ProductItem product={product} />
            </li>
          ))}
        </ul>
        <div>
          {!showModal && (
            <button className="view-cart" onClick={toggle}>
              View Cart ({cartItems.length})
            </button>
          )}
        </div>
        <CartPage showModal={showModal} toggle={toggle} />
      </div>
    </div>
  );
};

export default Body;
