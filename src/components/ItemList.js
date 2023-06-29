import React from "react";
import PropTypes from 'prop-types';
import Item from "./Item";

function ItemList(props) {
  const listItems =
    props.itemList.map((item) =>
      <li><Item
        whenItemClicked={props.onItemSelection}
        name={item.name}
        description={item.description}
        quantity={item.quantity}
        id={item.id}
        key={item.id} />-</li>);
  return (
    <>
      <h3>Goodies for Sale</h3>
      <h6>Click on item for details</h6>
      <ul>{listItems}</ul>
    </>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array,
  onItemSelection: PropTypes.func
};

export default ItemList;