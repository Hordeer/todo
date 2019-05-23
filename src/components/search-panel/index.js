import React, { Component } from 'react';

import styles from './search-panel.module.css';
import PropTypes from "prop-types";

export default class SearchPanel extends Component{
  static propTypes = {
    searchFilter: PropTypes.string.isRequired,
    onChangeSearchFilter: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      searchFilter: props.searchFilter
    };
    this.handleChangeSearchFilter = this.handleChangeSearchFilter.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChangeSearchFilter (event) {
    this.setState({
      searchFilter: event.target.value
    });
    this.props.onChangeSearchFilter(event.target.value);
  };

  handleReset () {
    this.setState({
      searchFilter: ''
    });
    this.props.onChangeSearchFilter('');
  };

  render () {
    return (
      <div className={styles.searchBlock}>
        <div className={styles.search}>
          <input className={styles.input} type="text" placeholder="Search" onChange={this.handleChangeSearchFilter} value={this.state.searchFilter} />
          <button className={styles.smallBtn} onClick={this.handleReset}>
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
    );
  }
}