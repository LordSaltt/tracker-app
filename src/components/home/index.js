import React, { Component } from "react";
import DonutChart from "react-donut-chart";
import { Alert, Container, Row, Col, Progress, Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import "../../index.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const dataPie = [
      { label: "Category1", value: 100, stroke: "#22594e" },
      { label: "Category2", value: 60, stroke: "#2f7d6d" },
      { label: "Category3", value: 30, stroke: "#3da18d" },
      { label: "Category4", value: 20, stroke: "#69c2b0" },
      { label: "Category5", value: 10, stroke: "#a1d9ce" }
    ];
    return (
      <div className="mainBody">
        <div className="customDark">
          <div>
            <Container className="customContainer">
              <Row>
                <Col xs="9">
                  <h1>Spending by category Detail</h1>
                </Col>
                <Col xs="3">
                  <h1 className="text-success"> $ 1,234.56</h1>
                </Col>
              </Row>
            </Container>
            <div className="customChart">
              <DonutChart className="customWithChart" data={dataPie} />
            </div>
            <div className="customNotifications">
              <Alert color="primary">
                This is a primary alert — check it out!
              </Alert>
              <Alert color="secondary">
                This is a secondary alert — check it out!
              </Alert>
              <Alert color="success">
                This is a success alert — check it out!
              </Alert>
              <Alert color="danger">
                This is a danger alert — check it out!
              </Alert>
              <Alert color="warning">
                This is a warning alert — check it out!
              </Alert>
              <Alert color="info">This is a info alert — check it out!</Alert>
            </div>
            <div />
          </div>
        </div>
        <div className="customRightAside">
          <div>
            <span>
              Budged <strong>April</strong>
              <Progress color="warning" value="48" />
            </span>
          </div>
          <div>
            <strong>Accounts Detail</strong>
            <Table striped>
              <thead>
                <tr>
                  <th>Account</th>
                  <th>Ammount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Maintenance</td>
                  <td>88.65</td>
                </tr>
                <tr>
                  <td>Grocery</td>
                  <td>256.62</td>
                </tr>
                <tr>
                  <td>Clothe</td>
                  <td>828.65</td>
                </tr>
                <tr>
                  <td>Food</td>
                  <td>452.65</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div>
            <strong>Top spending categories</strong>
            <div className="mainBody">
              <div className="text-center mr-3">
                <FontAwesomeIcon
                  icon={faLightbulb}
                  size="3x"
                  className="mr-3"
                />
                <h3>$ 125.36</h3>
                <span>Utilities</span>
              </div>
              <div className="text-center mr-3">
                <FontAwesomeIcon icon={faWrench} size="3x" className="mr-3" />
                <h3>$ 456.58</h3>
                <span>Maintenance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
