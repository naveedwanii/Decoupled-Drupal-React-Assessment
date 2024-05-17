import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartPage.scss";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { IMAGE_URL } from "../../utils/constants";

const CartPage = ({ showModal, toggle }) => {
  const {
    cartItems,
    incrementCart,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    itemCount,
    deleteItem,
  } = useContext(CartContext);

  return (
    showModal && (
      <>
        <div>
          <div className="cart-overlay"></div>
          <div className="cart">
            <div className="cart__header">
              <p>
                <FiShoppingCart className="cart__shopping-cart" />
                Order summary
              </p>
              <IoMdClose onClick={toggle} className="cart__close-button" />
            </div>
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
                    <tr className="cart-body__table-item">
                      <td className="cart-body__table-elements">
                        <img
                          src={IMAGE_URL + item.field_product_image}
                          className="cart-image"
                        />
                      </td>
                      <td>
                        <h3>{item.field_product_name}</h3>
                      </td>
                      <td>
                        <span>{item.field_product_selling_price}</span>
                      </td>
                      <td>
                        <div className="cart-body__buttons">
                          <button className="cart-body__buttons-button">
                            <GoPlus
                              onClick={() => {
                                incrementCart(item);
                              }}
                            />
                          </button>
                          <p>{item.quantity}</p>
                          <button className="cart-body__buttons-button">
                            <FiMinus
                              onClick={() => {
                                removeFromCart(item);
                              }}
                            />
                          </button>
                        </div>
                      </td>
                      <td>
                        <span className="card-body__item-count">
                          ${itemCount(item)}
                        </span>
                      </td>
                      <td>
                        <AiOutlineDelete
                          className="card-body__delete-icon"
                          onClick={() => deleteItem(item)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {cartItems.length > 0 ? (
              <div className="cart__footer">
                <h4>Total ${getCartTotal()}</h4>
              </div>
            ) : (
              <h2>Your cart is empty</h2>
            )}
          </div>
        </div>
      </>
    )
  );
};

export default CartPage;
