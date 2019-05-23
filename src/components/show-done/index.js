import React, { Component } from 'react';

import styles from './show-done.module.css';
import PropTypes from "prop-types";

export default class ShowDone extends Component{
  static propTypes = {
    toggleShowDone: PropTypes.func.isRequired,
    showDone: PropTypes.bool.isRequired
  };

  render () {
    const {props} = this;
    return (
      <div className={styles.showDone}>
        <input className={styles.doneCheckbox} id="done-checkbox" type="checkbox"
               onChange={() => props.toggleShowDone(props.showDone)} checked={props.showDone}/>
        <label htmlFor="done-checkbox">Show done</label>
      </div>
    );
  }
}