import React, { Component } from 'react';
import AddForm from './AddForm';
import Todos from './Todos';


export default class App extends Component {

  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play videogame'}
    ]
  }
  
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(item => {
      return item.id !== id;
    });

    this.setState({
      todos: todos
    });
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddForm addTodo={this.addTodo} />
      </div>
    )
  }
}
