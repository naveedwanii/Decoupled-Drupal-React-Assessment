import React from "react";

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItemsList from "../CartItemsList/CartItemsList";
import "./CartItems.scss";

const CartItems = () => {
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
              <CartItemsList item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CartItems;
