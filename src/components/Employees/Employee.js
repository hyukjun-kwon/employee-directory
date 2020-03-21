import React, { Component } from "react";

class Employee extends Component {
  render() {
    return (
      <div className="col-sm-5 col-md-3 m-2 card card-body bg-primary text-white text-center">
        <h4 className="card-title">{`${this.props.employee.firstName} ${this.props.employee.lastName}`}</h4>
        <div className="card-text">
          <p>{this.props.employee.position}</p>
          <p>{this.props.employee.department}</p>
          <hr />
          <p>Email: {this.props.employee.email}</p>
          <p>Phone: {this.props.employee.phone}</p>
        </div>
      </div>
    );
  }
}

export default Employee;
