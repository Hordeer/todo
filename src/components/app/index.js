import React, { Component } from 'react';

import CategoryBlock from '../categories-block';
import TodosBlock from '../todos-block';

import styles from './app.module.css';
import {getCategories, getTodos} from "../../actions";
import store from "../../store";

export default class App extends Component{
  componentDidMount () {
    store.dispatch(getCategories());
    store.dispatch(getTodos());
  }

  render () {
    return (
      <section className={styles.todoApp}>
        <CategoryBlock/>
        <TodosBlock/>
      </section>
    );
  }
}