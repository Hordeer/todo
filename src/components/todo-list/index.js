import React, { Component } from 'react';

import TodoListItem from '../todo-list-item';

import styles from './todo-list.module.css';

export default class TodoList extends Component{

  constructor(props) {
    super(props);
    this.handleShowEditTodoModal = this.handleShowEditTodoModal.bind(this);
  }

  handleShowEditTodoModal (todoId) {
    const todo = this.props.todos.find(todo => todoId === todo.id);
    this.props.showEditTodoModal(todo);
  };

  render () {
    const TasksList = this.props.todos.map(todo =>
      <TodoListItem
        key={todo.id}
        todo={todo}
        showEditTodoModal={this.handleShowEditTodoModal}
        toggleTodo={this.props.toggleTodo}
      />
    );

    return (
      <ul className={styles.todoList}>
        {TasksList}
      </ul>
    );
  }
}