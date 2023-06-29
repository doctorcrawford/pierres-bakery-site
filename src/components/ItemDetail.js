import React from "react";
import PropTypes from 'prop-types';

function ItemDetail(props) {
  const { item, onClickingDelete } = props;
  return (
    <>
      <h1>Item Detail</h1>
      <h3>{item.name}</h3>
      <p><em>{item.description}</em></p>
      <p>${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={ props.onClickingEdit }>Edit Item </button>
      <button onClick={() => onClickingDelete(item.id)}>Delete Item</button>
    </>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ItemDetail;