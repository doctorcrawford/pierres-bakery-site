import React from "react";
import PropTypes from 'prop-types';

function ItemDetail(props){
  const { item } = props;
  return (
    <>
      <h1>Item Detail</h1>
      <h3>{item.name}</h3>
      <p><em>{item.description}</em></p>
      <p>Quantity: {item.quantity}</p>
    </>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object
};

export default ItemDetail;