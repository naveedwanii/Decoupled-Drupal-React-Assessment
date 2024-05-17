import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartModal.scss";
import { IoMdClose } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import CartItems from "../CartItems/CartItems";

const CartModal = ({ showModal, toggle }) => {
  const { cartItems, getCartTotal } = useContext(CartContext);

  return (
    showModal && (
      <>
        <div className="cart-overlay"></div>
        <div className="cart">
          <div className="cart__header">
            <p>
              <FiShoppingCart className="cart__shopping-cart" />
              Order summary
            </p>
            <IoMdClose onClick={toggle} className="cart__close-button" />
          </div>

          <CartItems />

          {cartItems.length > 0 ? (
            <div className="cart__footer">
              <h4>Total ${getCartTotal()}</h4>
            </div>
          ) : (
            <h2>Your cart is empty</h2>
          )}
        </div>
      </>
    )
  );
};

export default CartModal;
