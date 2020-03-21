import React, { Component } from "react";
import { FaTimes, FaEdit } from 'react-icons/fa'

class Update extends Component {
  render() {
    const table = this.props.employees.map(employee => {
      return (
        <tr key={employee.id}>
          <th scope="row">{employee.id}</th>
          <td>{employee.firstName}</td>
          <td>{employee.lastName}</td>
          <td>{employee.position}</td>
          <td>{employee.department}</td>
          <td>{employee.email}</td>
          <td>{employee.phone}</td>
          <td>
            <button className="btn btn-warning" onClick={() => this.props.handleEditRequest(employee.id)}>
              <FaEdit />
            </button>
          </td>
          <td>
            <button className="btn btn-danger" onClick={() => this.props.removeEmployee(employee.id)}>
              <FaTimes />
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center my-2">
            <h1>Update Employees</h1>
          </div>
          <div className="col-sm-12">
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Position</th>
                  <th scope="col">Department</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>{table}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Update;
