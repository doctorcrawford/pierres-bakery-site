import React from "react";
import CartItem from "./CartItem";
import PropTypes from 'prop-types';

function Cart(props) {
  const cartItemsList =
    props.cartList.map((cartItem) =>
      <li><CartItem
        name={cartItem.name}
        quantity={cartItem.quantity}
        itemPrice={cartItem.itemPrice}
        itemTotalPrice={cartItem.itemTotalPrice} /></li>);

  return (
    <>
      <h3>Your Cart</h3>
      <ul>{cartItemsList}</ul>
    </>
  );
}

Cart.propTypes = {
  cartList: PropTypes.array
}

export default Cart;