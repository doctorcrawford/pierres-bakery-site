import React from "react";
import PropTypes from 'prop-types';

function NewItemForm(props) {

  function handleNewItemFormSubmission(e) {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.description.value);
    console.log(e.target.quantity.value);
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

}

export default NewItemForm;