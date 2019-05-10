import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import categories, * as fromCategories from './categories';
import todos from './todos';
import modal from './modal';
import { showDoneFilterReducer, searchFilterReducer } from './filters';

export default history => combineReducers({
  categories,
  todos,
  modal,
  currentCategoryId: fromCategories.currentCategoryIdReducer,
  showDoneFilter: showDoneFilterReducer,
  searchFilter: searchFilterReducer,
  router: connectRouter(history),
});
