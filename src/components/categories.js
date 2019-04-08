import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Table, Button } from "reactstrap";
import "../index.css";
import CategoryEdition from "./categoryEdition";
import CategoryDetail from "./categoryDetail";

class categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      newCategoryData: {
        category: "",
        description: "",
        isexpense: false
      },
      editCategoryData: {
        categoryid: "",
        category: "",
        description: "",
        isexpense: false
      },
      newCategoryModal: false,
      editCategoryModal: false,
      isEditing: false
    };
  }

  refresData() {
    axios.get("http://localhost:3000/categories").then(response => {
      this.setState({
        categories: response.data
      });
    });
  }

  componentWillMount() {
    this.refresData();
  }

  AddCategory() {
    axios
      .post("http://localhost:3000/categories", this.state.newCategoryData)
      .then(response => {
        let { categories } = this.state;
        this.setState({
          categories,
          newCategoryModal: false,
          newCategoryData: {
            category: "",
            description: "",
            isexpense: false
          }
        });
        this.refresData();
      });
  }

  editCategory(categoryid, category, description, isexpense) {
    this.setState({
      editCategoryData: { categoryid, category, description, isexpense },

      editCategoryModal: !this.state.editCategoryModal,
      isEditing: true
    });
  }

  toggleNewCategoryModal() {
    this.setState({
      newCategoryModal: !this.state.newCategoryModal
    });
  }

  toggleEditCategoryModal() {
    this.setState({
      editCategoryModal: !this.state.editCategoryModal
    });
  }

  UpdateCategory() {
    let { category, description, isexpense } = this.state.editCategoryData;
    axios
      .put(
        "http://localhost:3000/categories/" +
          this.state.editCategoryData.categoryid,
        {
          category,
          description,
          isexpense
        }
      )
      .then(response => {
        this.refresData();
        this.setState({
          editCategoryModal: false
        });
      });
  }

  deleteCategory(id) {
    axios.delete("http://localhost:3000/categories/" + id).then(response => {
      this.refresData();
    });
  }

  onChangeCategory(newValue) {
    if (!this.state.isEditing) {
      let { newCategoryData } = this.state;
      newCategoryData.category = newValue;
      this.setState({ newCategoryData });
    } else {
      let { editCategoryData } = this.state;
      editCategoryData.category = newValue;
      this.setState({ editCategoryData });
    }
  }

  onChangeDescription(newValue) {
    if (!this.state.isEditing) {
      let { newCategoryData } = this.state;
      newCategoryData.description = newValue;
      this.setState({ newCategoryData });
    } else {
      let { editCategoryData } = this.state;
      editCategoryData.description = newValue;
      this.setState({ editCategoryData });
    }
  }

  onChangeIsExpense(newValue) {
    if (!this.state.isEditing) {
      let { newCategoryData } = this.state;
      newCategoryData.isexpense = newValue;
      this.setState({ newCategoryData });
    } else {
      let { editCategoryData } = this.state;
      editCategoryData.isexpense = newValue;
      this.setState({ editCategoryData });
    }
  }

  render() {
    let categories = this.state.categories.map(category => {
      return (
        <CategoryDetail
          category={category}
          editCategory={this.editCategory.bind(this)}
          deleteCategory={this.deleteCategory.bind(this)}
        />
      );
    });
    return (
      <div className="App container contentWhite">
        <h1>Categories</h1>
        <Button
          className="my-3"
          color="primary"
          onClick={this.toggleNewCategoryModal.bind(this)}
        >
          <FontAwesomeIcon icon={faPlus} size="1x" className="mr-3" />
          Add Categories
        </Button>
        {/*add new category */}
        <CategoryEdition
          formTitle="Add New Category"
          newCategoryModal={this.state.newCategoryModal}
          toggleNewCategoryModal={this.toggleNewCategoryModal.bind(this)}
          newCategoryData={this.state.newCategoryData}
          AddCategory={this.AddCategory.bind(this)}
          onChangeCategory={this.onChangeCategory.bind(this)}
          onChangeDescription={this.onChangeDescription.bind(this)}
          onChangeIsExpense={this.onChangeIsExpense.bind(this)}
        />

        {/*edit category */}
        <CategoryEdition
          formTitle="Edit Category"
          newCategoryModal={this.state.editCategoryModal}
          toggleNewCategoryModal={this.toggleEditCategoryModal.bind(this)}
          newCategoryData={this.state.editCategoryData}
          AddCategory={this.UpdateCategory.bind(this)}
          onChangeCategory={this.onChangeCategory.bind(this)}
          onChangeDescription={this.onChangeDescription.bind(this)}
          onChangeIsExpense={this.onChangeIsExpense.bind(this)}
        />

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Category</th>
              <th>Description</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>{categories}</tbody>
        </Table>
      </div>
    );
  }
}

export default categories;
