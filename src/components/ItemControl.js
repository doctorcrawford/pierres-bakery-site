import React from "react";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";
import ItemDetail from "./ItemDetail";
import EditItemForm from "./EditItemForm";

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainItemList: [],
      selectedItem: null,
      editing: false
    };
  }

  handleAddingNewItemToList = (newItem) => {
    const newMainItemList = this.state.mainItemList.concat(newItem);
    this.setState({
      mainItemList: newMainItemList,
      formVisibleOnPage: false
    });
  }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.mainItemList.filter(item => item.id === id)[0];
    this.setState({ selectedItem: selectedItem });
  }

  handleDeletingItem = (id) => {
    const newMainItemList = this.state.mainItemList.filter(item => item.id !== id);
    this.setState({
      mainItemList: newMainItemList,
      selectedItem: null
    });
  }

  handleEditClick = () => {
    console.log('handleEditClick reached!');
    this.setState({ editing: true });
  }

  handleEditingItemInList = (itemToEdit) => {
    const editedMainItemList = this.state.mainItemList
      .filter(item => item.id !== this.state.selectedItem.id)
      .concat(itemToEdit);
    this.setState({
      mainItemList: editedMainItemList,
      editing: false,
      selectedItem: null
    });
  }



  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditItemForm item={this.state.selectedItem} onEditItem={this.handleEditingItemInList} />
      buttonText = 'Return to Item List';
    }
    else if (this.state.selectedItem != null) {
      currentlyVisibleState = <ItemDetail item={this.state.selectedItem} onClickingDelete={this.handleDeletingItem} onClickingEdit={this.handleEditClick} />
      buttonText = "Return to Item List"
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />
      buttonText = 'Return to Item List';
    } else {
      currentlyVisibleState = <ItemList itemList={this.state.mainItemList} onItemSelection={this.handleChangingSelectedItem} />;
      buttonText = "Add Item";
    }
    return (
      <>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

export default ItemControl;