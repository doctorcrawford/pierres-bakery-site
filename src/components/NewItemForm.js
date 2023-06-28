import React from "react";
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewItemForm(props) {

  function handleNewItemFormSubmission(e) {
    e.preventDefault();
    props.onNewItemCreation({
      name: e.target.name.value,
      description: e.target.description.value,
      quantity: parseInt(e.target.quantity.value),
      id: v4()
    })
  }
  
  return (
    <>
      <form onSubmit={handleNewItemFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Item Name' />
          <input
            type='text'
            name='description'
            placeholder="Description" />
          <input
            type='text'
            name='quantity'
            placeholder="Quantity" />
          <button type="submit">Add New Item</button>
      </form>
    </>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;