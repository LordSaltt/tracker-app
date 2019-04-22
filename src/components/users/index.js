import React, { Component } from "react";
import axios from "axios";
import { Table, Button } from "reactstrap";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  loadData() {
    axios.get("http://localhost:5000/api/user").then(response => {
      const { payload } = response.data;

      this.setState({
        users: payload
      });
    });
  }

  componentWillMount() {
    this.loadData();
  }

  render() {
    let users = this.state.users.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.lastname}</td>
        </tr>
      );
    });

    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>{users}</tbody>
      </Table>
    );
  }
}

export default Users;
