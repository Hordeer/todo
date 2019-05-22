import React from 'react';

import classNames from 'classnames';
import styles from './category-list-item.module.css';

export default class CategoryListItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleDeleteCategory = this.handleDeleteCategory.bind(this);
    this.handleShowEditCategoryModal = this.handleShowEditCategoryModal.bind(this);
    this.handleShowAddCategoryModal = this.handleShowAddCategoryModal.bind(this);
  }

  handleChangeCategory () {
    this.props.onChangeCategory(this.props.itemId);
    this.props.history.push('/category/' + this.props.itemId);
  }

  handleDeleteCategory () {
    this.props.onDeleteCategory(this.props.itemId);
  }

  handleShowEditCategoryModal () {
    this.props.showEditCategoryModal(this.props.itemId);
  }

  handleShowAddCategoryModal () {
    this.props.showAddCategoryModal(this.props.itemId);
  }

  render() {
    const {props} = this;

    return (
      <li className={classNames(styles.item, {[styles.innerListItem]: props.isInnerItem})}>
        <div>
            <span className={styles.itemName} style={props.isSelected ? {fontWeight: 'bold'} : {}}
                  onClick={this.handleChangeCategory}>{props.name}</span>
          <button className='small-btn' onClick={this.handleShowEditCategoryModal}>
            <i className="fas fa-edit"/>
          </button>
        </div>
        <div>
          <button className="small-btn" onClick={this.handleDeleteCategory}>
            <i className="fas fa-trash"/>
          </button>
          {!props.isInnerItem ?
            <button className="small-btn" onClick={this.handleShowAddCategoryModal}>
              <i className="fas fa-plus"/>
            </button>
            :
            null
          }
        </div>
      </li>
    );
  }
}