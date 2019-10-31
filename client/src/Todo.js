import React, { Component } from "react";
import axios from "axios";

class Todo extends Component {
  componentDidMount() {
    this.fetchTodo();
  }

  async fetchTodo() {
    const todo = await axios.get("/api/todos/all");
    console.log(todo);
  }

  render() {
    return <div>Todos</div>;
  }
}

export default Todo;
