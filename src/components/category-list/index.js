import React, { Component } from 'react';
import { matchPath } from "react-router";

import CategoryListItem from '../category-list-item';
import routes from '../../routes';

import styles from './category-list.module.css';
import PropTypes from "prop-types";

export default class CategoryList extends Component{
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
    currentCategoryId: PropTypes.number,
    onChangeCategory: PropTypes.func.isRequired,
    onAddCategory: PropTypes.func.isRequired,
    onEditCategory: PropTypes.func.isRequired,
    onDeleteCategory: PropTypes.func.isRequired,
  };

  componentDidMount () {
    const match = matchPath(this.props.location.pathname, routes.category);

    if (match !== null && match.path === routes.category.path) {
      this.props.onChangeCategory(parseInt(match.params.id));
    }
  }

  render () {
    const CategoryList = this.props.categories.map((item) => {
      const isSelected = this.props.currentCategoryId === item.id;
      return <CategoryListItem
        key={item.id}
        category={item}
        isInnerItem={'parentId' in item}
        isSelected={isSelected}
        onChangeCategory={this.props.onChangeCategory}
        onAddCategory={this.props.onAddCategory}
        onEditCategory={this.props.onEditCategory}
        onDeleteCategory={this.props.onDeleteCategory}
        history={this.props.history}
      />
    });

    return (
      <ul className={styles.categoryList}>
        {CategoryList}
      </ul>
    );
  }
}