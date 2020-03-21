import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Employees from "./components/Employees/Employees";
import Update from "./components/Update/Update";
import Edit from "./components/Edit/Edit";
import Add from "./components/Add/Add";
import NotFound from "./components/NotFound/NotFound";
import API from "./utils/API";

class App extends Component {
  state = {
    currentTab: "Employees",
    currentEmployee: "",
    employees: []
  };

  componentDidMount() {
    this.getAllEmployee();
  }

  getAllEmployee = async () => {
    API.findAll()
    .then(res => this.setState({
        employees: res.data
      })
    );
  }

  handleTabChange = tab => {
    return this.setState({
      currentTab: tab
    });
  };

  handleEditRequest = async (id) => {
    API.findEmployee(id)
    .then(res => this.setState({
      currentTab: "Edit",
      currentEmployee: res.data
    }));
  }

  addEmployee = employee => {
    API.addEmployee(employee)
    .then(res => this.getAllEmployee());

    this.setState({
      currentTab: "Update",
    })
  }

  updateEmployee = employee => {
    API.updateEmployee(employee)
    .then(res => this.getAllEmployee());
    
    this.setState({
      currentTab: "Update",
      currentEmployee: ""
    });
  }

  removeEmployee = id => {
    API.removeEmployee(id)
    .then(res => this.getAllEmployee());
    
    this.setState({
      currentTab: "Update"
    });
  }

  render() {
    let page;
    
    switch(this.state.currentTab) {
      case "Employees":
        page = <Employees employees={this.state.employees} />
        break;
      case "Update":
        page = <Update employees={this.state.employees} handleEditRequest={this.handleEditRequest} removeEmployee={this.removeEmployee}/>
        break;
      case "Edit":
        page = <Edit employee={this.state.currentEmployee} updateEmployee={this.updateEmployee} />
        break;
      case "Add":
        page = <Add addEmployee={this.addEmployee} />
        break;
      default:
        page = <NotFound />
        break;
    }

    return (
      <div className="container-fluid bg-secondary">
        <Navbar state={this.state} tabChange={this.handleTabChange} />
        {page}
      </div>
    );
  }
}

export default App;
