import React from "react";
import PropTypes from 'prop-types';
import Item from "./Item";

function ItemList(props) {
  return (
    <>
      <h3>Goodies for Sale</h3>
      <ul>
        <li>{props.itemList.map((item, index) =>
          <Item
            whenItemClicked={props.onItemSelection}
            name={item.name}
            description={item.description}
            quantity={item.quantity}
            id={item.id}
            key={item.id} />
        )}</li>
      </ul>
    </>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array,
  onItemSelection: PropTypes.func
};

export default ItemList;