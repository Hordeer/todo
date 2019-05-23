import React, { Component } from 'react';
import Modal from '../modal';
import classNames from "classnames";
import styles from './category-list-item.module.css';

export default class CategoryModal extends Component{
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.refs.name.value = 'name' in this.props ? this.props.name : '';
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.submit(this.refs.name.value);
    this.props.hideModal();
  }

  render () {
    return (
      <Modal>
        <form onSubmit={this.handleSubmit}>

          <button className={classNames(styles.saveBtn, styles.smallBtn, 'small-btn--close')} type="button" onClick={this.props.hideModal}>
            <i className="fas fa-times"/>
          </button>

          <input className={classNames(styles.name)} type="text" ref="name"/>

          <button className={classNames(styles.saveBtn)} type="submit">Save</button>

        </form>
      </Modal>
    );
  }
}