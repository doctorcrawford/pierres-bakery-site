import React from "react";
import PropTypes from 'prop-types';

function Item(props) {
  return (
    <>
      <div onClick={() => props.whenItemClicked(props.id)}>
        <p><em>{props.name}</em></p>
        {/* <p>{props.description}</p>
        <p>{props.quantity}</p> */}
      </div>
    </>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  // description: PropTypes.string,
  // quantity: PropTypes.number,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
}

export default Item;