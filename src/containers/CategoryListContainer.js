import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router";

import CategoryList from '../components/category-list';
import { setCurrentCategoryId, addCategory, editCategory, deleteCategory} from '../actions';
import { getSortedCategories } from '../selectors/categories';

function mapStateToProps(state) {
  return {
    categories: getSortedCategories(state),
    currentCategoryId: state.currentCategoryId
  };
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({
    onChangeCategory: setCurrentCategoryId,
    onAddCategory: addCategory,
    onEditCategory: editCategory,
    onDeleteCategory: deleteCategory,
  }, dispatch);
}

const CategoryListContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryList));
export default CategoryListContainer;
