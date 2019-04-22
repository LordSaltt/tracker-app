import React, { Component } from "react";
import Main from "./main";
import Header from "./components/header";

import "./index.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <section className="contentManager">
          <Main />
        </section>
      </div>
    );
  }
}

export default App;
