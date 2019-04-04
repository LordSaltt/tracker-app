import React, { Component } from "react";
import Categories from "./components/categories";
import { Navbar, NavbarBrand } from "reactstrap";
import "./index.css";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Navbar color="dark">
          <NavbarBrand className="mr-auto text-white" href="/" color="white">
            Expense Tracker
          </NavbarBrand>
        </Navbar>

        <section className="contentManager">
          <Categories />
        </section>
      </div>
    );
  }
}

export default App;
