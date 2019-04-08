import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class CategoryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  editItem(categoryid, category, description, isexpense) {
    this.props.editCategory(categoryid, category, description, isexpense);
  }

  evalueateType(isexpense) {
    return isexpense ? "Expense" : "Income";
  }

  render() {
    const { category } = this.props;

    return (
      <tr key={category.id}>
        <td>{category.categoryid}</td>
        <td>{category.category}</td>
        <td>{category.description}</td>
        <td>{this.evalueateType(category.isexpense)}</td>
        <td>
          <div className="customFlex">
            <div className="customToolTip">
              <Button
                className="mr-2"
                color="success"
                size="sm"
                id="editButton"
                onClick={this.editItem.bind(
                  this,
                  category.categoryid,
                  category.category,
                  category.description,
                  category.isexpense
                )}
              >
                <FontAwesomeIcon icon={faEdit} size="1x" />
              </Button>
              <span> Edit </span>
            </div>

            <div className="customToolTip">
              <Button
                color="danger"
                size="sm"
                //onClick={this.deleteCategory.bind(this, category.categoryid)}
                onClick={() => {
                  if (window.confirm("Delete the item?")) {
                    this.props.deleteCategory(category.categoryid);
                  }
                }}
              >
                <FontAwesomeIcon icon={faTrash} size="1x" />
              </Button>
              <span> Delete</span>
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

export default CategoryDetails;
