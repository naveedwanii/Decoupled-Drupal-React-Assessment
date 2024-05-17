import React from "react";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { IMAGE_URL } from "../../utils/constants";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartItemsList.scss";

const CartItemsList = ({ item }) => {
  const { incrementCart, removeFromCart, itemCount, deleteItem } =
    useContext(CartContext);
  return (
    <>
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
          <span className="card-body__item-count">${itemCount(item)}</span>
        </td>
        <td>
          <AiOutlineDelete
            className="card-body__delete-icon"
            onClick={() => deleteItem(item)}
          />
        </td>
      </tr>
    </>
  );
};

export default CartItemsList;
