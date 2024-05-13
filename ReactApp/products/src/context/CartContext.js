import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.field_id === item.field_id
    );

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.quantity < item.field_product_stock
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
      console.log(cartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const incrementCart = (item) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.field_id === item.field_id
    );
    if (isItemInCart.quantity < item.field_product_stock) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.field_id === item.field_id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems]);
    }
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.field_id === item.field_id
    );
    if (isItemInCart.quantity === 1) {
      setCartItems(
        cartItems.filter((cartItem) => cartItem.field_id !== item.field_id)
      );
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.field_id === item.field_id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const itemCount = (item) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.field_id === item.field_id
    );

    if (isItemInCart) {
      return item.field_product_selling_price * item.quantity;
    }
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.field_product_selling_price * item.quantity,
      0
    );
  };

  const deleteItem = (item) => {
    const deleteItemInCart = cartItems.filter(
      (cartItem) => cartItem.field_id !== item.field_id
    );
    setCartItems(deleteItemInCart);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        incrementCart,
        addToCart,
        removeFromCart,
        itemCount,
        deleteItem,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
