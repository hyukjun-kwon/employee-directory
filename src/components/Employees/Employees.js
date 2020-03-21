import React, { Component } from "react";
import Employee from "./Employee";

class Employees extends Component {
  state = {
    departmentTab: "all",
    search: "",
    searchInput: ""
  };

  onClickAll = () => {
    if (this.state.departmentTab !== "all") {
      this.setState({ departmentTab: "all" });
    }
  };

  onClickDevelopment = () => {
    if (this.state.departmentTab !== "Development") {
      this.setState({ departmentTab: "Development" });
    }
  };

  onClickEngineering = () => {
    if (this.state.departmentTab !== "Engineering") {
      this.setState({ departmentTab: "Engineering" });
    }
  };

  onClickFinance = () => {
    if (this.state.departmentTab !== "Finance") {
      this.setState({ departmentTab: "Finance" });
    }
  };

  onClickLegal = () => {
    if (this.state.departmentTab !== "Legal") {
      this.setState({ departmentTab: "Legal" });
    }
  };

  onClickSales = () => {
    if (this.state.departmentTab !== "Sales") {
      this.setState({ departmentTab: "Sales" });
    }
  };

  onClickSearch = event => {
    event.preventDefault();

    let search = this.state.searchInput;

    this.setState({
      search: search, 
      searchInput: ""
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
      search: this.state.searchInput
    });
  };

  resetSearch = event => {
    event.preventDefault();

    this.setState({
      search: "",
      searchInput: ""
    });
  }

  render() {
    let employees = this.props.employees;

    if(this.state.departmentTab !== "all") {
      employees = employees.filter(
        employee => employee.department === this.state.departmentTab
      );
    }

    if(this.state.search !== "") {
      employees = employees.filter(
        employee => {
          const name = `${employee.firstName}${employee.lastName}`.toLowerCase();
          return name.search(this.state.search.toLowerCase()) !== -1
        }
      )
    }

    const employeeCards = employees.map(employee => (
      <Employee key={employee.id} employee={employee} />
    ));
    return (
      <div className="container bg-secondary">
        <div className="row">
          <div className="col-sm-12 col-md-8 offset-md-2 input-group text-center mt-2">
            <input
              value={this.state.searchInput}
              type="text"
              name="searchInput"
              onChange={this.handleInputChange}
              className="form-control"
              placeholder="Search for Employee Name"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" onClick={this.onClickSearch}>
                Search
              </button>
              <button className="btn btn-primary" onClick={this.resetSearch}>
                Reset
              </button>
            </div>
          </div>
          <div className="col-12 text-center my-2">
            <button
              className="btn btn-lg btn-primary m-1"
              onClick={this.onClickAll}
            >
              All
            </button>
            <button
              className="btn btn-lg btn-primary m-1"
              onClick={this.onClickDevelopment}
            >
              Development
            </button>
            <button
              className="btn btn-lg btn-primary m-1"
              onClick={this.onClickEngineering}
            >
              Engineering
            </button>
            <button
              className="btn btn-lg btn-primary m-1"
              onClick={this.onClickFinance}
            >
              Finance
            </button>
            <button
              className="btn btn-lg btn-primary m-1"
              onClick={this.onClickLegal}
            >
              Legal
            </button>
            <button
              className="btn btn-lg btn-primary m-1"
              onClick={this.onClickSales}
            >
              Sales
            </button>
          </div>
          <div className="col-12">
            <div className="row justify-content-md-center">{employeeCards}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Employees;
