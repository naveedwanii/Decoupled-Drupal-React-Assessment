import React from "react";

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem.js";
import "./CartItemList.scss";

const CartItemList = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <div className="cart-body">
        <table className="cart-body__table">
          <thead>
            <tr className="cart-body__table-items">
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CartItemList;
