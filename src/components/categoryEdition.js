import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faUndo } from "@fortawesome/free-solid-svg-icons";
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
        description: "",
        isexpense: false
      },
      checked: false
    };
    this.handleSwitch = this.handleSwitch.bind(this);
    this.validateChecked = this.validateChecked.bind(this);
  }

  onCategoryFieldChange(e) {
    this.state.categoryData.category = e.target.value;
    this.props.onChangeCategory(this.state.categoryData.category);
  }

  onDescriptionFieldChange(e) {
    this.state.categoryData.description = e.target.value;
    this.props.onChangeDescription(this.state.categoryData.description);
  }

  validateChecked() {
    this.state.categoryData = this.props.newCategoryData;
    this.state.checked = this.state.categoryData.isexpense;
  }

  handleSwitch(checked) {
    this.state.categoryData.isexpense = checked;
    this.props.onChangeIsExpense(checked);
  }

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
          {this.validateChecked(this.props.newCategoryData.isexpense)}
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
              <label className="swichContainer">
                <span className="mr-1">Mark as an expense</span>
                <Switch
                  onChange={this.handleSwitch}
                  checked={newCategoryData.isexpense}
                />
              </label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={AddCategory}>
            <FontAwesomeIcon icon={faSave} size="1x" />
          </Button>
          <Button color="secondary" onClick={toggleNewCategoryModal}>
            <FontAwesomeIcon icon={faUndo} size="1x" />
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default CategoryEdition;
