import React from 'react';

import classNames from 'classnames';
import styles from './category-list-item.module.css';
import CategoryModal from "./category-modal";

export default class CategoryListItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showEditCategoryModal: false,
      showAddCategoryModal: false
    };

    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleAddCategory = this.handleAddCategory.bind(this);
    this.handleEditCategory = this.handleEditCategory.bind(this);
    this.handleDeleteCategory = this.handleDeleteCategory.bind(this);
    this.handleShowEditCategoryModal = this.handleShowEditCategoryModal.bind(this);
    this.handleShowAddCategoryModal = this.handleShowAddCategoryModal.bind(this);
  }

  handleChangeCategory () {
    this.props.onChangeCategory(this.props.category.id);
    this.props.history.push('/category/' + this.props.category.id);
  }

  handleAddCategory (name) {
    this.props.onAddCategory({
      parentId: this.props.category.id,
      name: name
    });
  }

  handleEditCategory (name) {
    this.props.category.name = name;
    this.props.onEditCategory(this.props.category);
  }

  handleDeleteCategory () {
    this.props.onDeleteCategory(this.props.category.id);
  }

  handleShowAddCategoryModal () {
    this.setState({
      showAddCategoryModal: !this.state.showAddCategoryModal
    });
  }

  handleShowEditCategoryModal () {
    this.setState({
      showEditCategoryModal: !this.state.showEditCategoryModal
    });
  }

  render() {
    const {props} = this;

    return (
      <li className={classNames(styles.item, {[styles.innerListItem]: props.isInnerItem})}>
        <div>
            <span className={styles.itemName} style={props.isSelected ? {fontWeight: 'bold'} : {}}
                  onClick={this.handleChangeCategory}>{props.category.name}</span>
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
        {this.state.showAddCategoryModal ?
          <CategoryModal
            hideModal={this.handleShowAddCategoryModal}
            submit={this.handleAddCategory}
          />
          :
          null
        }
        {this.state.showEditCategoryModal ?
          <CategoryModal
            name={props.category.name}
            hideModal={this.handleShowEditCategoryModal}
            submit={this.handleEditCategory}
          />
          :
          null
        }
      </li>
    );
  }
}