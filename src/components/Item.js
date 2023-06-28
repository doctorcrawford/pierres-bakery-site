import React from "react";
import PropTypes from 'prop-types';

function Item(props) {
  return (
    <>
      <p><em>{props.name}</em></p>
      <p>{props.description}</p>
      <p>{props.quantity}</p>
    </>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number
}

export default Item;