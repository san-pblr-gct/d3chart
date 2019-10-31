import React, { Component } from "react";
import axios from "axios";

class Todo extends Component {
  componentDidMount() {}

  async fetchTodos() {
    const todos = await axios.get("api/todos/all");
    console.log(todos);
  }

  render() {
    return <div>Todos</div>;
  }
}

export default Todo