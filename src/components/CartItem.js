import React from "react";
import PropTypes from 'prop-types';

function CartItem(props) {
  return (
    <>
      <h6>{props.name}</h6>
      <p>{props.quantity}</p>
      <p>{props.itemPrice}</p>
      <p>{props.itemTotalPrice}</p>
    </>
  );
}

CartItem.propTypes = {
  name: PropTypes.string,
  quantiy: PropTypes.number,
  itemPrice: PropTypes.number,
  itemTotalPrice: PropTypes.number
}

export default CartItem;