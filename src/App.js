import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Employees from "./components/Employees/Employees";
import Update from "./components/Update/Update";
import Edit from "./components/Edit/Edit";
import Add from "./components/Add/Add";
import NotFound from "./components/NotFound/NotFound";
import employees from "./employees.json";

class App extends Component {
  state = {
    currentTab: "Employees",
    currentEmployee: "",
    employees
  };

  handleTabChange = tab => {
    return this.setState({
      currentTab: tab
    });
  };

  handleEditRequest = id => {
    this.setState({
      currentTab: "Edit",
      currentEmployee: this.state.employees.filter(employee => employee.id === id)[0]
    })
  }

  addEmployee = employee => {
    const newID = 1+ this.state.employees[this.state.employees.length - 1].id;    
    let newEmployee = Object.assign({id:newID}, employee);

    let Employees = this.state.employees;
    Employees.push(newEmployee);

    this.setState({
      currentTab: "Update",
      employees: Employees
    })
  }

  updateEmployee = employee => {
    let newEmployees = this.state.employees;
    const empLen = newEmployees.length;

    for(let i=0; i < empLen; i++) {
      if(newEmployees[i].id === employee.id) {
        newEmployees[i] = employee;
        break;
      }
    }
    
    this.setState({
      currentTab: "Update",
      currentEmployee: "",
      employees: newEmployees
    });
  }

  removeEmployee = id => {
    let newEmployees = this.state.employees;
    const empLen = newEmployees.length;

    for(let i=0; i < empLen; i++) {
      if(newEmployees[i].id === id) {
        newEmployees.splice(i, 1);
        break;
      }
    }
    
    this.setState({
      currentTab: "Update",
      currentEmployee: "",
      employees: newEmployees
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
