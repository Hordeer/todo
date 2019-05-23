import React, { Component } from 'react';
import Modal from '../modal';
import classNames from "classnames";
import styles from './todo-list-item.module.css';
import PropTypes from "prop-types";

export default class TodoModal extends Component{
  static propTypes = {
    todo: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
    submit: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.refs.text.value = this.props.todo.text;
    this.refs.isDone.checked = this.props.todo.done;
    this.refs.category.value = this.props.todo.categoryId;
  }

  handleSubmit(event) {
    event.preventDefault();

    const todo = {
      ...this.props.todo,
      text: this.refs.text.value,
      done: this.refs.isDone.checked,
      categoryId: parseInt(this.refs.category.value)
    };

    this.props.submit(todo);
    this.props.hideModal();
  }

  render () {
    const categoryOptions = this.props.categories.map(category =>
      <option key={category.id} value={category.id}>
        {category.name}
      </option>
    );

    return (
      <Modal>
        <form onSubmit={this.handleSubmit}>

          <button className={classNames(styles.saveBtn, styles.smallBtn, 'small-btn--close')} type="button" onClick={this.props.hideModal}>
            <i className="fas fa-times"/>
          </button>

          <input className={classNames(styles.name)} type="text" ref="text"/>

          <div className={styles.isDone}>
            <input className={styles.doneCheckbox} id="isdone-checkbox" type="checkbox" ref="isDone" />
            <label htmlFor="isdone-checkbox">Is Done</label>
          </div>

          {this.props.categories.length > 0 ?
            <select className={styles.selection} ref="category" defaultValue={this.props.todo.categoryId}>
              {categoryOptions}
            </select>
            :
            null
          }

          <button className={classNames(styles.saveBtn)} type="submit">Save</button>

        </form>
      </Modal>
    );
  }
}