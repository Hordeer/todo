import * as categoryApi from '../api/categories';

export const SET_CATEGORIES = 'SET_CATEGORIES';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';
export const SET_CURRENT_CATEGORY_ID = 'SET_CURRENT_CATEGORY_ID';

export function getCategories() {
  return dispatch => {
    return categoryApi.getAllCategories()
      .then(response => response.data)
      .then(categories => {
        dispatch({
          type: SET_CATEGORIES,
          categories
        });
      });
  };
}

export function addCategory(category) {
  return dispatch => {
    return categoryApi.addCategory(category)
      .then(response => response.data)
      .then(category => dispatch({
        type: ADD_CATEGORY,
        category
      }));
  };
}

export function deleteCategory(id) {
  return dispatch => {
    return categoryApi.deleteCategory(id)
      .then(response => {
        dispatch({
          type: DELETE_CATEGORY,
          id
        });
      });
  };
}

export function editCategory(category) {
  return dispatch => {
    return categoryApi.editCategory(category)
      .then(response => response.data)
      .then(category => dispatch({
        type: EDIT_CATEGORY,
        category
      }));
  };
}

export function setCurrentCategoryId(id) {
  return dispatch => {
    return dispatch({
      type: SET_CURRENT_CATEGORY_ID,
      currentCategoryId: id,
    });
  };
}
