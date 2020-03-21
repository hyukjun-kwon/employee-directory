import axios from "axios";

const BASEURL = "https://still-basin-91207.herokuapp.com";

export default {
  findAll: () => {
    return axios.get(BASEURL + "/employees");
  },

  findEmployee: (id) => {
    return axios.get(BASEURL + "/findEmployee/" + id);
  },

  addEmployee: (employee) => {
    return axios.post(BASEURL + "/employees", employee);
  },

  updateEmployee: (employee) => {
    return axios.put(BASEURL + "/updateEmployee/" + employee.id, employee);
  },

  removeEmployee: (id) => {
    return axios.delete(BASEURL + "/removeEmployee/" + id);
  }


};
