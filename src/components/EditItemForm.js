import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';

function EditItemForm(props) {
  const { item } = props;

  function handleEditItemFormSubmission(e) {
    e.preventDefault();
    props.onEditItem({ name: e.target.name.value, description: e.target.description.value, quantity: e.target.quantity.value, id: item.id });
  }

  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleEditItemFormSubmission}
        buttonText="Edit Item" />
    </>
  );
}

EditItemForm.propTypes = {
  item: PropTypes.object,
  onEditItem: PropTypes.func
}

export default EditItemForm;