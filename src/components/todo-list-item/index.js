import React, { PureComponent } from 'react';

import styles from './todo-list-item.module.css';
import TodoModal from "./todo-modal";
import PropTypes from "prop-types";

export default class TodoListItem extends PureComponent{
  static propTypes = {
    todo: PropTypes.object.isRequired,
    onEditTodo: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      showEditCategoryModal: false
    };

    this.handleToggleTodo = this.handleToggleTodo.bind(this);
    this.handleShowEditTodoModal = this.handleShowEditTodoModal.bind(this);
  }

  handleToggleTodo () {
    this.props.todo.done = !this.props.todo.done;
    this.props.onEditTodo(this.props.todo);
  }

  handleShowEditTodoModal () {
    this.setState({
      showEditCategoryModal: !this.state.showEditCategoryModal
    });
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
        {this.state.showEditCategoryModal ?
          <TodoModal
            todo={props.todo}
            categories={props.categories}
            hideModal={this.handleShowEditTodoModal}
            submit={this.props.onEditTodo}
          />
          :
          null
        }
      </li>
    );
  }
}