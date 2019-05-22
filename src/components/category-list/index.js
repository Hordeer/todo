import React, { Component } from 'react';
import { matchPath } from "react-router";

import CategoryListItem from '../category-list-item';
import routes from '../../routes';

import styles from './category-list.module.css';

export default class CategoryList extends Component{
  constructor(props) {
    super(props);
    this.handleShowEditCategoryModal = this.handleShowEditCategoryModal.bind(this);
    this.handleShowAddCategoryModal = this.handleShowAddCategoryModal.bind(this);
  }

  componentDidMount () {
    const match = matchPath(this.props.location.pathname, routes.category);

    if (match !== null && match.path === routes.category.path) {
      this.props.onChangeCategory(parseInt(match.params.id));
    }
  }

  handleShowEditCategoryModal (categoryId) {
    const category = this.props.categories.find(category => categoryId === category.id);
    this.props.showEditCategoryModal(category);
  };

  handleShowAddCategoryModal (categoryId) {
    const category = {
      name: '',
      parentId: categoryId
    };
    this.props.showAddCategoryModal(category);
  };

  render () {
    const CategoryList = this.props.categories.map((item) => {
      const isSelected = this.props.currentCategoryId === item.id;
      return <CategoryListItem
        key={item.id}
        itemId={item.id}
        name={item.name}
        isInnerItem={'parentId' in item}
        isSelected={isSelected}
        onChangeCategory={this.props.onChangeCategory}
        onDeleteCategory={this.props.onDeleteCategory}
        showEditCategoryModal={this.handleShowEditCategoryModal}
        showAddCategoryModal={this.handleShowAddCategoryModal}
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