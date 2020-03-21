import React, { Component } from "react";
import { MdPersonAdd } from 'react-icons/md';
import "./Navbar.css";

class Navbar extends Component {
  employeeButton = () => {
    if(this.props.state.currentTab !== "Employees") {
      this.props.tabChange("Employees");
    }
  }

  addButton = () => {
    if(this.props.state.currentTab !== "Add") {
      this.props.tabChange("Add");
    }
  }

  updateButton = () => {
    if(this.props.state.currentTab !== "Update") {
      this.props.tabChange("Update");
    }
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
        <a className="navbar-brand text-white" href="/">
          <b>Employee Directory</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <button className="ml-auto btn btn-primary" onClick={this.employeeButton}><b>Employees</b></button>
          <button className="btn btn-primary" onClick={this.addButton}><b><MdPersonAdd/></b></button>
          <button className="btn btn-primary" onClick={this.updateButton}><b>Update</b></button>
        </div>
      </nav>
    );
  }
}

export default Navbar;