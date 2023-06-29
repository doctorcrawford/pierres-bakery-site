import React from "react";
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewItemForm(props) {

  function handleNewItemFormSubmission(e) {
    e.preventDefault();
    props.onNewItemCreation({
      name: e.target.name.value,
      description: e.target.description.value,
      price: e.target.price.value,
      quantity: parseInt(e.target.quantity.value),
      id: v4()
    })
  }
  
  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleNewItemFormSubmission}
        buttonText='Add New Item' />
    </>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;