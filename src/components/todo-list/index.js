import React, { Component } from 'react';

import TodoListItem from '../todo-list-item';

import styles from './todo-list.module.css';
import PropTypes from "prop-types";

export default class TodoList extends Component{
  static propTypes = {
    todos: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    onEditTodo: PropTypes.func.isRequired
  };

  render () {
    const TasksList = this.props.todos.map(todo =>
      <TodoListItem
        key={todo.id}
        todo={todo}
        categories={this.props.categories}
        onEditTodo={this.props.onEditTodo}
      />
    );

    return (
      <ul className={styles.todoList}>
        {TasksList}
      </ul>
    );
  }
}