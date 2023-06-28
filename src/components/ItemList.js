import React from "react";
import PropTypes from 'prop-types';
import Item from "./Item";
import NewItemForm from "./NewItemForm";

function ItemList(props) {
  return (
    <>
      <h3>Goodies for Sale</h3>
      {props.itemList.map((item, index) =>
      <Item name={item.name}
        description={item.description}
        quantity={item.quantity}
        key={index} />
      )}
    </>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array
};

export default ItemList;