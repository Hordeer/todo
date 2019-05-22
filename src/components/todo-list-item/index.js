import React, { PureComponent } from 'react';

import styles from './todo-list-item.module.css';

export default class TodoListItem extends PureComponent{

  constructor(props) {
    super(props);
    this.handleToggleTodo = this.handleToggleTodo.bind(this);
    this.handleShowEditTodoModal = this.handleShowEditTodoModal.bind(this);
  }

  handleToggleTodo () {
    this.props.toggleTodo(this.props.todo);
  }

  handleShowEditTodoModal () {
    this.props.showEditTodoModal(this.props.todo.id);
  }

  render () {
    const {props} = this;

    return (
      <li className={styles.item}>
        <input type="checkbox" onChange={this.handleToggleTodo} checked={props.todo.done} />
        <span className={styles.itemName}>{props.todo.text}</span>
        <button className="small-btn" onClick={this.handleShowEditTodoModal}>
          <i className="fas fa-edit" />
        </button>
      </li>
    );
  }
}