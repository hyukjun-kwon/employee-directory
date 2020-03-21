import React, { Component } from "react";

class Add extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    department: "Development"
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="container">
        <form>
          <div className="row mt-2">
            <div className="col">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="col">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <label>Position</label>
              <input
                type="text"
                className="form-control"
                name="position"
                value={this.state.position}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="col">
              <label>Department</label>
              <select
                className="custom-select"
                name="department"
                onChange={this.handleInputChange}
                value={this.state.department}
              >
                <option value="Development">Development</option>
                <option value="Engineering">Engineering</option>
                <option value="Finance">Finance</option>
                <option value="Legal">Legal</option>
                <option value="Sales">Sales</option>
              </select>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="col">
              <label>Phone</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={this.state.phone}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <button
                className="btn btn-primary btn-block"
                onClick={() => this.props.addEmployee(this.state)}
              >
                Add Employee
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Add;
