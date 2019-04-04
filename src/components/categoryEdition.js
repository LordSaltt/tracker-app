import React, { Component } from "react";
import {
  ButtonGroup,
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
import "../index.css";
import Switch from "react-switch";

class CategoryEdition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryData: {
        categoryid: "",
        category: "",
        description: ""
      }
    };
  }

  onCategoryFieldChange(e) {
    this.state.categoryData.category = e.target.value;
    this.props.onChangeCategory(this.state.categoryData.category);
  }

  onDescriptionFieldChange(e) {
    this.state.categoryData.description = e.target.value;
    this.props.onChangeDescription(this.state.categoryData.description);
  }

  handleSwitch() {}

  render() {
    const {
      formTitle,
      newCategoryModal,
      toggleNewCategoryModal,
      newCategoryData,
      AddCategory
    } = this.props;
    return (
      <Modal isOpen={newCategoryModal} toggle={toggleNewCategoryModal}>
        <ModalHeader toggle={toggleNewCategoryModal}>{formTitle}</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="category">Category</Label>
              <Input
                data-toggle="tooltip"
                title="show tooltip"
                placeholder="add new category"
                id="category"
                value={newCategoryData.category}
                onChange={this.onCategoryFieldChange.bind(this)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="textarea"
                id="descriptionText"
                value={newCategoryData.description}
                onChange={this.onDescriptionFieldChange.bind(this)}
              />
            </FormGroup>

            <FormGroup>
              <div className="Container">
                <Label for="type">
                  <span>Mark as an expense</span>
                  <Switch onChange={this.handleSwitch.bind(this)} />
                </Label>
              </div>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={AddCategory}>
            Add Category
          </Button>
          <Button color="secondary" onClick={toggleNewCategoryModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default CategoryEdition;
