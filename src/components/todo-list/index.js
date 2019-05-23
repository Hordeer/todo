import React, { Component } from 'react';

import TodoListItem from '../todo-list-item';

import styles from './todo-list.module.css';

export default class TodoList extends Component{
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